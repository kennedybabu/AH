import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users.service';
import { UserInfo } from '../core/models/auth.models';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../pagination/pagination.module';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { County } from '../shared/data/county.model';
import { SubCounty } from '../shared/data/subCounty.model';
import { Ward } from '../shared/data/ward.model';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SharedModule,
    NgbModule,
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public breadCrumbItems!: Array<{}>;

  public users: UserInfo[] = [];
  public size: number = 1;
  public limit: number = 20;
  public totalUsers: number = 0;
  public selectedExportOption: string = 'CSV';
  public searchText: string = '';

  counties: County[] = [];
  subCounties: SubCounty[] = [];
  wards: Ward[] = [];
  updateUserForm: FormGroup;

  public selectedUser!: UserInfo;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.updateUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idNumber: ['', Validators.required],
      dateOfBirth: [this.formatDate(new Date()), Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      countyTitle: ['', Validators.required],
      subcountyTitle: ['', Validators.required],
      wardTitle: ['', Validators.required],
    });
  }

  private formatDate(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Userslist', active: true },
    ];
    this.fetchUsers();
  }
  onParamsChange() {
    this.fetchUsers();
  }
  centerModal(userModal: any, user: UserInfo) {
    this.selectedUser = user;

    this.updateUserForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      idNumber: user.idNumber,
      dateOfBirth: this.formatDate(new Date(user.dob)),
      phoneNumber: user.msisdn,
      gender: user.gender,
      countyTitle: user.countyTitle,
      subcountyTitle: user.subcountyTitle,
      wardTitle: user?.wardTitle,
    });
    this.modalService.open(userModal, {
      centered: true,
      windowClass: 'modal-user-holder',
      size: 'lg',
    });

    this.getCounties();

    const countyControl = this.updateUserForm.get('county');
    const subcountyControl = this.updateUserForm.get('subcounty');

    if (countyControl) {
      countyControl.valueChanges.subscribe((countyId) => {
        this.subCounties = this.usersService.fetchSubCounties(Number(countyId));
      });
    }

    if (subcountyControl) {
      subcountyControl.valueChanges.subscribe((subcountyId) => {
        this.wards = this.usersService.getWards(Number(subcountyId));
      });
    }
  }
  navigateToProfile(user: UserInfo) {
    this.router.navigate(['/users', user?.email]);
  }
  navigateToAddUser() {
    this.router.navigate(['/users/add-user']);
  }
  handleSubmit(event: Event) {
    event.preventDefault();
  }
  fetchUsers() {
    this.usersService.getUsers(this.size, this.limit).subscribe(
      (data: UserInfo[]) => {
        this.users = data;
        this.totalUsers = 200;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  onPageChange(page: number) {
    this.size = page;
    this.fetchUsers();
  }

  filterUsers(): UserInfo[] {
    if (!this.searchText.trim()) {
      return this.users;
    }
    return this.users.filter(
      (user) =>
        user?.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user?.lastName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user?.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  getCounties(): void {
    this.counties = this.usersService.fetchCounties();
  }
}

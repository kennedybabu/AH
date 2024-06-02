import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../pagination/pagination.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../users/users.service';
import { County, NewCounty, SuperSubCounty } from '../shared/data/county.model';
import { counties } from '../shared/data/Counties';
import { SubCounty } from '../shared/data/subCounty.model';
import { Ward } from '../shared/data/ward.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule, CommonModule, PaginationModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  public breadCrumbItems!: Array<{}>;
  userForm: FormGroup;

  counties: County[] = [];
  subCounties: SubCounty[] = [];
  wards: Ward[] = [];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idNumber: ['', Validators.required],
      dateOfBirth: [this.formatDate(new Date()), Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      county: ['', Validators.required],
      subcounty: ['', Validators.required],
      ward: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
      { label: 'Add user', active: true },
    ];
    this.getCounties();

    const countyControl = this.userForm.get('county');
    const subcountyControl = this.userForm.get('subcounty');

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
  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.userForm.valid) {
      const formData = {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        gender: this.userForm.value.gender,
        idNumber: this.userForm.value.idNumber,
        dob: this.userForm.value.dateOfBirth,
        email: this.userForm.value.email,
        msisdn: this.userForm.value.phoneNumber,
        username: this.userForm.value.username,
        password: this.userForm.value.password,
        userTypeId: this.userForm.value.role,
        wardId: this.userForm.value.ward,
      };
      await this.usersService.createUser(formData).subscribe(
        (res) => {
          this.userForm.reset();
          this.toastr.success('Success', 'User added successfully');
        },
        (error) => {
          console.error('Error:', error);
          this.toastr.error('Error', 'Failed to add user');
        }
      );
    }
  }

  getCounties(): void {
    this.counties = this.usersService.fetchCounties();
  }
}

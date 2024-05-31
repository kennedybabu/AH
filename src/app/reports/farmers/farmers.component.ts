import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { SharedModule } from '../../shared/shared.module';
import { County } from '../../shared/data/county.model';
import { Ward } from '../../shared/data/ward.model';
import { counties } from 'src/app/shared/data/Counties';
import { NgSelectModule } from '@ng-select/ng-select';
import { GroupsService } from 'src/app/groups/groups.services';
import { FarmersService } from 'src/app/farmers/farmers.service';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/users/users.service';
import { CommonModule } from '@angular/common';
import { Farmer } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-farmers',
  standalone: true,
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './farmers.component.html',
  styleUrl: './farmers.component.scss',
})
export class FarmersComponent implements OnInit {
  ColumnMode = ColumnMode;
  breadCrumbItems!: Array<{}>;
  searchForm!: FormGroup;
  counties: County[] = [];
  sub_counties: SubCounty[] = [];
  wards: Ward[] = [];
  groups = [];
  rows = [];
  filteredArray = [];
  public currentPage: number = 1;
  public updateFarmerForm!: FormGroup;

  public updateCounties: County[] = [];
  public updateSubcounties: SubCounty[] = [];
  public updateWards: Ward[] = [];

  public selectedFarmer!: Farmer;

  dataParams: any = {
    page_num: '',
    page_size: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private groupsService: GroupsService,
    private farmersService: FarmersService,
    private usersService: UsersService,
    private modalService: NgbModal
  ) {}

  private formatDate(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  ngOnInit(): void {
    const date = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    this.dataParams.page_num = 0;
    this.dataParams.page_size = 10;

    this.counties = counties;

    this.breadCrumbItems = [
      { label: 'Reports' },
      { label: 'Farmers', active: true },
    ];
    this.searchForm = this.formBuilder.group({
      start_date: [this.formatDate(startDate), Validators.required],
      end_date: [this.formatDate(date), Validators.required],
      countyId: [[], Validators.required],
      subCountyId: [[], Validators.required],
      wardId: [[], Validators.required],
      groupId: [[], Validators.required],
    });

    this.updateFarmerForm = this.formBuilder.group({
      dob: [this.formatDate(new Date()), Validators.required],
      gender: ['', Validators.required],
      is_tot: null,
      msisdn: ['', Validators.required],
      id_number: ['', Validators.required],
      last_name: ['', Validators.required],
      ward_name: ['', Validators.required],
      first_name: ['', Validators.required],
      county_title: ['', Validators.required],
      sub_county_title: ['', Validators.required],
    });
    this.getUsers();

    const countyControl = this.updateFarmerForm.get('county');
    const subcountyControl = this.updateFarmerForm.get('subcounty');

    if (countyControl) {
      countyControl.valueChanges.subscribe((countyId) => {
        this.updateSubcounties = this.usersService.fetchSubCounties(
          Number(countyId)
        );
      });
    }

    if (subcountyControl) {
      subcountyControl.valueChanges.subscribe((subcountyId) => {
        this.updateWards = this.usersService.getWards(Number(subcountyId));
      });
    }
  }
  subCounties(event: Event) {
    if (this.searchForm) {
      let ids = this.searchForm.get('countyId')?.value;
      let filtered_array = this.counties.filter((obj: any) =>
        ids.includes(obj.county_id)
      );
      filtered_array.forEach((element) => {
        this.sub_counties = this.sub_counties.concat(element.sub_counties);
      });
    }
  }

  centerModal(userModal: any, farmer: Farmer) {
    this.selectedFarmer = farmer;

    this.updateFarmerForm.patchValue({
      dob: this.formatDate(new Date(this.selectedFarmer.dob)),
      gender: this.selectedFarmer.gender,
      is_tot: null,
      msisdn: this.selectedFarmer.msisdn,
      id_number: this.selectedFarmer.id_number,
      last_name: this.selectedFarmer.last_name,
      ward_name: this.selectedFarmer.ward_name,
      first_name: this.selectedFarmer.first_name,
      county_title: this.selectedFarmer.county_title,
      sub_county_title: this.selectedFarmer.sub_county_title,
    });
    this.modalService.open(userModal, {
      centered: true,
      windowClass: 'modal-user-holder',
      size: 'lg',
    });
  }

  // private formatDate(date: Date): string {
  //   let d = new Date(date),
  //       month = '' + (d.getMonth() + 1),
  //       day = '' + d.getDate(),
  //       year = d.getFullYear();

  //   if (month.length < 2) month = '0' + month;
  //   if (day.length < 2) day = '0' + day;

  //   return [year, month, day].join('-');
  // }
  handleSubmit(event: Event) {}

  onSubmit() {
    // this.spinner.show()
    let data = this.searchForm.value;
    if (data.wardId.length > 0) {
      data.subCountyId = [];
      data.countyId = [];
    }
    if (data.subCountyId.length > 0) {
      data.wardId = [];
      data.countyId = [];
    }
    this.farmersService.getMembersByLocations(data).subscribe((res) => {
      if (res.statusCode == 200) {
        this.rows = res.message;
        // console.log(this.rows)
        this.cdr.markForCheck();
        // this.spinner.hide()
      }
    });
  }

  getWards(event: Event) {
    if (this.searchForm) {
      let ids = this.searchForm.get('subCountyId')?.value;
      let filtered_array = this.sub_counties.filter((obj: any) =>
        ids.includes(obj.subCountyId)
      );
      filtered_array.forEach((element) => {
        this.wards = this.wards.concat(element.wards);
      });
    }
  }

  filterGroups(data: any) {
    if (this.searchForm) {
      let obj = {
        countyId: this.searchForm.get('countyId')?.value,
        subCountyId: this.searchForm.get('subCountyId')?.value,
        wardId: this.searchForm.get('wardId')?.value,
        startDate: this.searchForm.get('startDate')?.value
          ? this.searchForm.get('startDate')?.value
          : '',
        endDate: this.searchForm.get('endDate')?.value
          ? this.searchForm.get('endDate')?.value
          : '',
      };
      this.groupsService.getGroupsByLocation(obj).subscribe((res) => {
        if (res.statusCode == 200) {
          this.groups = res.message;
          this.cdr.markForCheck();
        }
      });
    }
  }

  view(row: any) {}

  getUsers() {
    // this.spinner.show()
    let data = {
      page: this.dataParams.page_num,
      dataObj: this.searchForm.value,
    };
    this.farmersService.getClients(data).subscribe((res) => {
      if (res.statusCode == 200) {
        this.rows = res.message;
        // this.filteredArray = this.rows
        this.cdr.markForCheck();
        // this.spinner.hide()
      }
    });
  }
  getCounties(): void {
    this.updateCounties = this.usersService.fetchCounties();
  }

  setPage(pageInfo: any) {
    // console.log(pageInfo)
    this.dataParams.page_num = pageInfo.offset + 1;
    let data = {
      page: this.dataParams.page_num,
      dataObj: this.searchForm.value,
    };
    this.farmersService.getClients(data).subscribe((res) => {
      if (res.statusCode == 200) {
        this.rows = res.message;
        // this.filteredArray = this.rows
        this.cdr.markForCheck();
        // this.spinner.hide()
      }
    });
  }
}

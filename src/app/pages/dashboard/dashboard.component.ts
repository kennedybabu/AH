import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateFormatDirective } from 'src/app/shared/directives/date-format.directive';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
/**
 *  Dashboard Component
 */
export class DashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  num: number = 0;
  searchForm!: FormGroup
  counties=[]
  sub_counties=[]
  wards=[]
  groups=[]

  constructor(
    private formBuilder:FormBuilder
  ) {}

  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };


  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'Dashboard', active: true }
    ];

    this.searchForm = this.formBuilder.group({
      countyId: [[], Validators.required],
      subCountyId: [[], Validators.required],
      wardId: [[], Validators.required],
      groupId: [[], Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required],
    });
  }

  subCounties(event:Event) {
    
  }

  fetchGroups(event:Event) {

  }

  getWards(event:Event) {

  }

  search(){
    console.log(this.searchForm.value)
  }

}
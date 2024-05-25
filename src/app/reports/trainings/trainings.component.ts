import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GroupsService } from 'src/app/groups/groups.services';
import { counties } from 'src/app/shared/data/Counties';
import { County } from 'src/app/shared/data/county.model';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { Ward } from 'src/app/shared/data/ward.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule, NgxDatatableModule, NgSelectModule],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  searchForm!: FormGroup;
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  ColumnMode = ColumnMode;
  trainings=[]
  dataParams: any = {  
    page_num: '',  
    page_size: ''  
  }; 
  groups=[]


  constructor(
    private groupsService:GroupsService,
    private cdr:ChangeDetectorRef,
    private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.dataParams.page_num = 1
    this.dataParams.page_size = 15

    this.counties = counties

    this.breadCrumbItems = [
      { label: 'Reports' },
      { label: 'Trainings', active: true }
    ];

    this.searchForm = this.formBuilder.group({
      start_date:['', Validators.required],
      end_date:['', Validators.required],
      countyId: [[], Validators.required],
      subCountyId: [[], Validators.required],
      wardId: [[], Validators.required],
      groupId: [[], Validators.required]
    });
      
  }


  onSubmit(){
    // this.spinner.show()
    let data=this.searchForm.value
    if(data.wardId.length > 0){
        data.subCountyId=[]
        data.countyId=[]
    }
    if(data.subCountyId.length > 0){
        data.wardId=[]
        data.countyId=[]
    }
  }

  view(row: any){

  }

  setPage(pageInfo: any) {
    this.dataParams.page_num = pageInfo.offset + 1;
    // let data = {
    //   page: this.dataParams.page_num,
    //   dataObj: this.searchForm.value
    // }
    // this.totsService.getAllToTs(this.dataParams.page_num).subscribe((res) => {
    //   this.rows = res.message;
    // })
  }

  subCounties(event:Event) {
    if(this.searchForm) {
      let ids = this.searchForm.get('countyId')?.value
      let filtered_array=this.counties.filter((obj:any)=>ids.includes(obj.county_id))
      filtered_array.forEach(element => {
        this.sub_counties = this.sub_counties.concat(element.sub_counties)
     });
    }
  }

  getWards(event:Event) {
    if(this.searchForm) {
      let ids = this.searchForm.get('subCountyId')?.value 
      let filtered_array = this.sub_counties.filter((obj: any) =>ids.includes(obj.subCountyId))
      filtered_array.forEach(element => {
        this.wards=this.wards.concat(element.wards)
      })
    }
  }

  filterGroups(data: any) {
    if(this.searchForm) {
      let obj = {
          "countyId": this.searchForm.get('countyId')?.value,
          "subCountyId": this.searchForm.get('subCountyId')?.value,
          "wardId": this.searchForm.get('wardId')?.value,
          "startDate": this.searchForm.get('startDate')?.value ? this.searchForm.get('startDate')?.value: '',
          "endDate": this.searchForm.get('endDate')?.value ? this.searchForm.get('endDate')?.value : '',
      }
      this.groupsService.getGroupsByLocation(obj).subscribe((res) => {
          if(res.statusCode == 200) {
              this.groups = res.message 
              this.cdr.markForCheck()
          }
      })
    }
  }

}

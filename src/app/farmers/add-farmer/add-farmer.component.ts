import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmersService } from '../farmers.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { counties } from 'src/app/shared/data/Counties';
import { County } from 'src/app/shared/data/county.model';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { Ward } from 'src/app/shared/data/ward.model';


@Component({
  selector: 'app-add-farmer',
  standalone: true,
  imports: [],
  templateUrl: './add-farmer.component.html',
  styleUrl: './add-farmer.component.scss'
})
export class AddFarmerComponent implements OnInit {
  searchForm!:FormGroup
  registerForm!: FormGroup;
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  groups=[]


  // trials: any = countyData
  genders: any=[{"name":"Female"}, {"name":"Male"}]
  options: any=[{"name":"true"}, {"name": "false"}]
  public ColumnMode = ColumnMode;

  constructor(
    private formBuilder:FormBuilder,
    private cdr:ChangeDetectorRef,
    private farmersService:FarmersService){}

  ngOnInit(): void {
    this.counties = counties

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      msisdn: ['', Validators.required],
      wardId:['', Validators.required],
      lastName:['', Validators.required],
      groupId:['', Validators.required],
      idNumber:['', Validators.required],
      dob:['', Validators.required],
      gender: ['', Validators.required],
      valueChains: ['', Validators.required],
      disabled: ['', Validators.required],
      countyId: [[], Validators.required],
      subCountyId: [[], Validators.required],
  });
  }

  getWardId(event: any) {
    // if(event != undefined) {
    //     this.service.getMembersByWard(event.ward_id).subscribe((res) => {
    //         console.log(res)
    //     })
    // }
    this.getWardGroups()
  }

  getWardGroups() {
    let obj = {
        "countyId": [],
        "subCountyId": [],
        "wardId": [this.registerForm.get('wardId')?.value],
        "startDate":'',
        "endDate":''
    }
    // this.spinner.show()
    // this.service.getGroupsByLocation(obj).subscribe((res) => {
    //     if(res.statusCode == 200) {
    //         this.spinner.hide()
    //         this.groups = res.message
    //         console.log(res, 'groups')
    //     }
    // })
  }

  subCounties(event: any) {
    let ids = this.registerForm.get('countyId')?.value
    console.log(ids)
     let filtered_array=this.counties.filter((obj:any)=>ids.includes(obj.county_id))
     filtered_array.forEach(element => {
       this.sub_counties=this.sub_counties.concat(element.sub_counties)
     });

     console.log(this.sub_counties)

 }

 filterWards(event:any) {
   let ids = this.registerForm.get('subCountyId')?.value 
   let filtered_array = this.sub_counties.filter((obj: any) =>ids.includes(obj.subCountyId))
   filtered_array.forEach(element => {
       this.wards=this.wards.concat(element.wards)
    })
 }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TotsService } from '../tots.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { County } from 'src/app/shared/data/county.model';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { Ward } from 'src/app/shared/data/ward.model';
import { Tot } from 'src/app/core/models/tot.model';
import { ToastrService } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { counties } from 'src/app/shared/data/Counties';
@Component({
  selector: 'app-tot-profile',
  standalone: true,
  imports: [
    SharedModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tot-profile.component.html',
  styleUrl: './tot-profile.component.scss'
})
export class TotProfileComponent implements OnInit {

  userId!: any
  breadCrumbItems:any
  activeId!: number
  registerForm!: FormGroup;
  searchForm!: FormGroup
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  userObject!: any
  genders: any=[{"name":"Female"}, {"name":"Male"}]


  constructor(
    private route:ActivatedRoute,
    private cdr:ChangeDetectorRef,
    private totService:TotsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.activeId = 1
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['', Validators.required],
      idNumber:['', Validators.required],
      dob:['', Validators.required],
      email:['', Validators.required],
      msisdn: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      userTypeId: ['', Validators.required],
      wardId: ['', Validators.required],
    });

    this.searchForm = this.formBuilder.group({
      countyId: ['', Validators.required],
      subCountyId: ['', Validators.required],
      wardId: ['', Validators.required],
      groupId: []
    })

    this.route.params.subscribe(
      (params:Params) => {
        this.userId = +params['id']
      }
    )

    this.breadCrumbItems = [
      { label: 'Profile' },
      { label: 'ToT Profile', active: true }
    ];

    this.getTotDetails()
  }

  centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  cancel() {

  }

  update() {
    let obj = {
        // "memberId": this.userObject.userId,
        // "groupId": this.userObject..group_id,
      //  "wardId": this.userObject.groupDetails.ward_id,
      //  "firstName": this.userObject.firstName,
      //  "lastName": this.userObject.lastName,
      //  "msisdn": this.userObject.msisdn,
      //  "idNumber":  this.userObject.idNumber,
      //  "dob":this.userObject.dob,
      //  "gender": this.userObject.gender,
      //  "createAt": "",
      //  "username": '',
      //  "isActive":'',
      //  "userTypeId": 12,
      //  ""

       "createAt": 'string',
       "dob": 'string', 
       "email": 'string',
       "firstName": "string",
       "gender": "string",
       "idNumber": "string",
       "isActive": 1,
       "lastName": "string",
       "msisdn": 1,
       "updatedAt": "string",
       "userId": 1,
       "userTypeId": 12,
       "username": "string",
       "ward_id": 2
   }
   this.totService.updateTot(obj).subscribe((res) => {
       if(res.statusCode == 200) {
           this.toastr.success('Updated', "Success")
          //  this.location.back()
       }
   })
}

  getTotDetails(){
    this.totService.getUserProfile(this.userId).subscribe((res) => {
      console.log(res)
    })
  }

  subCounties(event: any) {
    let ids = this.searchForm.get('countyId')?.value
     let filtered_array=this.counties.filter((obj:any)=>ids.includes(obj.county_id))
     filtered_array.forEach(element => {
       this.sub_counties=this.sub_counties.concat(element.sub_counties)
     });
 }

 getWards(event: any){
    let ids = this.searchForm.get('subCountyId')?.value 
    let filtered_array = this.sub_counties.filter((obj: any) =>ids.includes(obj.subCountyId))
    filtered_array.forEach(element => {
      this.wards=this.wards.concat(element.wards)
    })
  }

 filterWards(event: any) {
   let ids = this.searchForm.get('subCountyId')?.value 
   let filtered_array = this.sub_counties.filter((obj: any) =>ids.includes(obj.subCountyId))
   filtered_array.forEach(element => {
     this.wards=this.wards.concat(element.wards)
   })
 }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TotsService } from 'src/app/tots/tots.service';
import { County } from 'src/app/shared/data/county.model';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { Ward } from 'src/app/shared/data/ward.model';
import { counties } from 'src/app/shared/data/Counties';

@Component({
  selector: 'app-tots',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, NgSelectModule, NgxDatatableModule,FormsModule],
  templateUrl: './tots.component.html',
  styleUrl: './tots.component.scss'
})
export class TotsComponent implements OnInit {
  public currentPage: number = 1
  breadCrumbItems!: Array<{}>;
  searchForm!: FormGroup;
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  ColumnMode= ColumnMode;
  rows=[]


  dataParams: any = {  
    page_num: '',  
    page_size: ''  
  }; 

  constructor(
    private formBuilder:FormBuilder,
    private cdr:ChangeDetectorRef,
    private totsService:TotsService
  ){}
  ngOnInit(): void {
    this.dataParams.page_num = 0
    this.dataParams.page_size = 10

    this.counties = counties
    this.breadCrumbItems = [
      { label: 'Reports' },
      { label: 'ToTs', active: true }
    ];

    this.searchForm = this.formBuilder.group({
      //   start_date:['', Validators.required],
      //   end_date:['', Validators.required],
        countyId: [[], Validators.required],
        subCountyId: [[], Validators.required],
        wardId: [[], Validators.required]
    });

    this.getUsers()
  }

  onSubmit(){
    // this.spinner.show()
    // this.totsService.getMembersByLocations(this.searchForm.value).subscribe((res) => {
    //     if(res.statusCode == 200) {
    //         this.rows = res.message
    //         console.log(this.rows)
    //         this.cdr.markForCheck()
    //         this.spinner.hide()
    //     }
    // })
  }

  setPage(pageInfo: any) {
    this.dataParams.page_num = pageInfo.offset + 1;
    // let data = {
    //   page: this.dataParams.page_num,
    //   dataObj: this.searchForm.value
    // }
    this.totsService.getAllToTs(this.dataParams.page_num).subscribe((res) => {
      this.rows = res.message;
    })
  }

  getUsers(){
    // this.spinner.show()
    this.totsService.getAllToTs(this.dataParams.page_num).subscribe((res)=> {
      console.log(res)
        this.rows = res.message;
        // this.filteredArray = this.rows
        this.cdr.markForCheck();
        // this.spinner.hide()
        // console.log(this.rows)
    })
  }

  subCounties(event: Event) {
    let ids = this.searchForm.get('countyId')?.value
     let filtered_array=this.counties.filter((obj:any)=>ids.includes(obj.county_id))
     filtered_array.forEach(element => {
       this.sub_counties=this.sub_counties.concat(element.sub_counties)
    });
  }

 filterWards(event: Event) {
    let ids = this.searchForm.get('subCountyId')?.value 
    let filtered_array = this.sub_counties.filter((obj: any) =>ids.includes(obj.subCountyId))
    filtered_array.forEach(element => {
      this.wards=this.wards.concat(element.wards)
    })
  }

  filterSubCounties(id: number) {
    // this.service.getCountySubCounties(id).subscribe((res) => {
    //     if(res.statusCode == 200) {
    //       this.allSubCounties = res.message.sub_counties
    //       }
    //     })
    // }
  }

  view(row: any){

  }

}

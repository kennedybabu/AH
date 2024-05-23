import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GroupsService } from 'src/app/core/services/groups.service';
import { County } from 'src/app/shared/data/county.model';
import { SubCounty } from 'src/app/shared/data/subCounty.model';
import { Ward } from 'src/app/shared/data/ward.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { counties } from 'src/app/shared/data/Counties';
import { CoursesService } from '../courses.service';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { offset } from '@popperjs/core';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

export interface TrainingData {
  training_id: number, 
  name: string, 
  course: string, 
  course_module: string,
  training_date: string,
  next_training_date: string,
  total_members_trained: number,
  training_type: string,
  value_chain_name: string,
  value_chain_id: number,
}

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [
    SharedModule, 
    ReactiveFormsModule,
    NgSelectModule, 
    FormsModule, 
    NgxDatatableModule,
    CommonModule
    // MatFormFieldModule,
    // MatPaginatorModule,
    // MatTableModule
  ],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss',
})
export class TrainingsComponent implements OnInit, AfterViewInit {
  // displayedColumns: string[] = ['name', 'course', 'course_module', 'training_date', 'next_training_date', 'members_trained', 'value_chain_name'];
  // dataSource = new MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  ColumnMode= ColumnMode;
  breadCrumbItems: any;
  searchForm!: FormGroup;
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  groups=[]
  trainings=[]
  currentPage:number=1
  dataParams: any = {  
    page_num: '',  
    page_size: ''  
  }; 


  constructor(  
    private groupsService:GroupsService,
    private cdr:ChangeDetectorRef,
    private formBuilder:FormBuilder,
    private coursesService:CoursesService){}

  ngOnInit(): void {
    this.dataParams.page_num = 1
    this.dataParams.page_size = 15
    this.counties = counties

    this.breadCrumbItems = [
      { label: 'Courses' },
      { label: 'Trainings', active: true }
    ];

    this.searchForm = this.formBuilder.group({
      countyId: [[], Validators.required],
      subCountyId: [[], Validators.required],
      wardId: [[], Validators.required],
      groupId: [[], Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required],
    });
      

    this.getTrainings()
    this.setPage({ offset: 0 })
  }

  ngAfterViewInit(): void {

    // setTimeout(() => {
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;  
    //   }
    // }, 0)
  }

  viewDetails(row: any){

  }

  // setPage(selectedPage:number) {
  //   // this.currentPage = this.currentPage + selectedPage
  //   // this.service.getTrainings(this.currentPage).subscribe((res) => {
  //   //     if(res.statusCode == 200) {
  //   //       this.trainings = res.message.trainings
  //   //       this.cdr.markForCheck()
  //   //       this.spinner.hide()
  //   //     }
  //   // })
  // }

  setPage(pageInfo: any) {
    // this.p = pageInfo.offset;
    // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    // });
  }

  search(){
    console.log(this.searchForm.value)
  }

  getTrainings() {
    this.coursesService.getTrainings(1).subscribe((res) => {
      if(res.statusCode == 200) {
        this.trainings = res.message.trainings
        // this.dataSource.data = this.trainings
        this.cdr.markForCheck()
      }

      console.log(this.trainings)
    })
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

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}

import { Ward } from './../../shared/data/ward.model';
import { SubCounty } from './../../shared/data/subCounty.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateFormatDirective } from 'src/app/shared/directives/date-format.directive';
import { counties } from 'src/app/shared/data/Counties';
import { County } from 'src/app/shared/data/county.model';
import { GroupsService } from 'src/app/core/services/groups.service';
import { SummaryService } from 'src/app/core/services/summary.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexMarkers,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';
import { MembersService } from 'src/app/core/services/members.service';

export type countyOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;

};

export interface optionChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}
export type trainingOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
};
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
  searchForm!: FormGroup;
  counties: County[]=[]
  sub_counties: SubCounty[] = []
  wards: Ward[] = []
  groups=[]
  totalGroups: number = 0
  summary: any = {}
  ToTsNo: number = 0
  totalMembers: number = 0
  totalNumber!: number
  malePercentage!: number
  femalePercentage!: number
  disabledPercentage!: number

  trainingChart!: Partial<optionChart> | any
  trainingChartCategories=[]
  totalTrained=[]
  

  constructor(
    private formBuilder:FormBuilder,
    private groupsService:GroupsService,
    private cdr:ChangeDetectorRef,
    private summaryService:SummaryService,
    private membersService:MembersService) {}

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
      this.counties = counties

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
    this.getSummary()
    this.getCourseSummary()

    this.trainingChart = {
      series: [
        {
          name: "Trained",
          data: []
        }
      ],
      chart: {
        height: 360,
        type: "bar",
        toolbar: {
         show: true,
       }
      },

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius:6,
          distributed: true,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },      
      xaxis: {
        categories: ['Enterprise Development', 'Group Dynamics', 'VSLA', 'GAPS']
      },
      fill: {
        colors: ['#540d6e', '#ee4266', '#ffd23f', '#a663cc', '#0ead69', '#8f2d56']
      }
      
    };
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

  fetchGroups(event:Event) {

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

  search(){
    console.log(this.searchForm.value)
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
              this.totalGroups = this.groups.length
              this.cdr.markForCheck()
          }
      })

    }

  }
  
  getSummary() {
    this.summaryService.getSummary().subscribe((res)=> {
      console.log(res)
      if(res.statusCode == 200) {
        this.summary = res.message
        this.totalGroups = res.message.total_groups
        this.ToTsNo = this.summary.total_tots
        this.totalMembers = this.summary.total_members

        this.totalNumber = this.summary.total_members 
        this.malePercentage = (this.summary.total_male_members + this.summary.total_disabled_male_tots) 
        this.femalePercentage = (this.summary.total_female_members + this.summary.total_disabled_female_tots) 
        this.disabledPercentage = (this.summary.total_disabled_male_tots+ this.summary.total_disabled_female_tots)  

        // this.setGenderChart()
        this.cdr.markForCheck()
      }
    })
  }

  getCourseSummary() {
    this.membersService.getCoursesTrainedMembers().subscribe((res) => {
      if(res.statusCode == 200) {
        console.log(res.message)
        this.updateTrainedChart(res.message)
        this.cdr.markForCheck()
      }
    })
  }

  updateTrainedChart(data: any) {
    this.trainingChartCategories = data.map((row: any) => row.title)
    this.totalTrained = data.map((row:any) => row.total_members_trained)    

    if(this.trainingChart.xaxis && this.trainingChart.series) {
      this.trainingChart.xaxis.categories = this.trainingChartCategories  
  
      this.trainingChart.series[0].data = this.totalTrained
      
      this.trainingChart = {
          ...this.trainingChart, 
          xaxis:{ categories: this.trainingChartCategories},
          series: [{ data: this.totalTrained }]
      }
      this.cdr.markForCheck()
    }
  }
}
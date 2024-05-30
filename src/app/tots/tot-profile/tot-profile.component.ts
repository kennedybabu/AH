import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TotsService } from '../tots.service';

@Component({
  selector: 'app-tot-profile',
  standalone: true,
  imports: [],
  templateUrl: './tot-profile.component.html',
  styleUrl: './tot-profile.component.scss'
})
export class TotProfileComponent implements OnInit {

  userId!: any

  constructor(
    private route:ActivatedRoute,
    private cdr:ChangeDetectorRef,
    private totService:TotsService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.userId = +params['id']
      }
    )

    this.getTotDetails()
  }


  getTotDetails(){
    this.totService.getUserProfile(this.userId).subscribe((res) => {
      console.log(res)
    })
  }

}

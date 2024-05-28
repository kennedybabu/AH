import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../pagination/pagination.module';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule, CommonModule, PaginationModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  public breadCrumbItems!: Array<{}>;

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Add user', active: true },
    ];
  }
}

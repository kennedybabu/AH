import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users.service';
import { UserInfo } from '../core/models/auth.models';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../pagination/pagination.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, CommonModule, PaginationModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public breadCrumbItems!: Array<{}>;

  public users: UserInfo[] = [];
  public size: number = 1;
  public limit: number = 10;
  public totalUsers: number = 0;

  public searchText: string = '';

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Userslist', active: true },
    ];
    this.fetchUsers();
  }
  onParamsChange() {
    this.fetchUsers();
  }
  navigateToProfile(user: UserInfo) {
    this.router.navigate(['/users', user?.email]);
  }
  navigateToAddUser() {
    this.router.navigate(['/users/add-user']);
  }
  fetchUsers() {
    this.usersService.getUsers(this.size, this.limit).subscribe(
      (data: UserInfo[]) => {
        this.users = data;
        this.totalUsers = data.length;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  onPageChange(page: number) {
    this.size = page;
    this.fetchUsers();
  }

  filterUsers(): UserInfo[] {
    if (!this.searchText.trim()) {
      return this.users;
    }
    return this.users.filter(
      (user) =>
        user?.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user?.lastName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user?.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

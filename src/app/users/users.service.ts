import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserInfo } from '../core/models/auth.models';
import { endpoint } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users = [];

  constructor(private http: HttpClient) {}

  getUsers(page: number, size: number): Observable<UserInfo[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http
      .get<{ message: UserInfo[] }>(endpoint + 'users/all', { params })
      .pipe(map((response) => response.message));
  }

  getUserProfile(email: string) {
    return this.http
      .get<{ message: UserInfo }>(`${endpoint}users/get/${email}`)
      .pipe(map((response) => response?.message));
  }
}

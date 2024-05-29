import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserInfo } from '../core/models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users = [];
  private baseUrl = 'http://109.123.254.230:8196/api/users/all';

  constructor(private http: HttpClient) {}

  getUsers(page: number, size: number): Observable<UserInfo[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http
      .get<{ message: UserInfo[] }>(this.baseUrl, { params })
      .pipe(
        map((response) => response.message)
      );
  }
}

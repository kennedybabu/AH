import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoint } from './auth.service';

@Injectable({
    providedIn:'root'
})

export class MembersService {
    constructor(private http:HttpClient) {}

    private extractData(res: any){
        const body = res 
        return body || {}
    }

    getCoursesTrainedMembers(): Observable<any> {
        return this.http.get(endpoint+'training/get-courses-and-members-trained').pipe(
          map((this.extractData))
        )
    }
}
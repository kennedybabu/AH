import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '../core/services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class FarmersService {
    constructor(private http:HttpClient){}

    private extractData(res: any){
        const body = res 
        return body || {}
    }

    addFarmer(data: any): Observable<any> {
        return this.http.post(endpoint + 'member/create', data).pipe(
          map(this.extractData));
    }


    getGroupMembers(data: any):Observable<any> {
        return this.http.get(endpoint+'members/'+ data +'?page=1&size=15').pipe(
          map((this.extractData))
        )
    }

    getWardToTs(data: any): Observable<any> {
        return this.http.get(endpoint+'users/tot/2/'+ data).pipe(
          map((this.extractData))
        )
    }
    
 }
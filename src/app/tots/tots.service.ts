import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '../core/services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class TotsService {
    constructor(private http:HttpClient){}

    private extractData(res: any){
        const body = res 
        return body || {}
    } 

    getWardToTs(data: any): Observable<any> {
        return this.http.get(endpoint+'users/tot/2/'+ data).pipe(
          map((this.extractData))
        )
    }

    getAllToTs(data: any): Observable<any> {
        return this.http.get(endpoint+'users/tots/2?page='+data+'&size=25').pipe(
          map((this.extractData))
        )
    }


    getTotsByLocations(data: any): Observable<any> {
        return this.http.post(endpoint+'/members/by-location?page=1&size=20', data).pipe(
          map((this.extractData))
        )
    }


    
}
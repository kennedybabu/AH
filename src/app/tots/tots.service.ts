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
    
}
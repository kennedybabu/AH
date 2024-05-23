import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '../core/services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class VlcService {
    constructor(private http:HttpClient){}

    private extractData(res: any){
        const body = res 
        return body || {}
    }

    getValueChains(): Observable<any> {
        return this.http.get(endpoint + 'value-chain/all',).pipe(
          map(this.extractData));
    }


    getAllSeedVarieties(): Observable<any> {
        return this.http.get(endpoint+'seed-varieties').pipe(
          map((this.extractData))
        )
    }


    seedDistributionReg(data: any): Observable<any> {
        return this.http.post(endpoint+ 'seed-distribution/create', data).pipe(
          map((this.extractData))
        )
    }
    
    
}
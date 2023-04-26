import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicePlanService {
  
  constructor(private http: HttpClient) { }
  private BASE_URL = 'http://localhost:8000/PI/api/plans/getPlan';
  getOffers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

}

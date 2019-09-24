import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Calculation from './Calculation';
import CalculationHistory from './calculation-history';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  uri = 'http://localhost:9258/';
  list:CalculationHistory[];

  constructor(private http: HttpClient) { }

  doCalculation(model:Calculation) {
   return this.http.post(`${this.uri}api/calculation/Post`, model);
  }
  refreshList(){
    return this.http.get(`${this.uri}api/calculation/Get`);   
   
  }
}

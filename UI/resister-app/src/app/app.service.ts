import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  apiURL = 'http://localhost:8080/api/home/';
  constructor(private http: Http) { }
  getOhms(obj: any): Observable<any> {
    // http://127.0.0.1:8080/api/home/CalculateOhmValue?bandAColor=1&bandBColor=1&bandCColor=1&bandDColor=1
    // let apiURL = 'http://localhost:8080/api/home/CalculateOhmValue?bandAColor= &bandBColor=1&bandCColor=1&bandDColor=1';
    // tslint:disable-next-line:max-line-length
    this.apiURL = `${this.apiURL}CalculateOhmValue?bandAColor=${obj.ColorA}&bandBColor=${obj.ColorB}&bandCColor=${obj.ColorC}&bandDColor=${obj.ColorD}`;
    return this.http.get(this.apiURL)
        .map(res => {
          return res.json();
        });
  }
}

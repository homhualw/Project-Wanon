//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {
  //สร้างตัวแปรเพื่อกำหนดurl API
  baseURLAPI: any;

  constructor(public http: Http) {
    this.baseURLAPI = "http://localhost/dbionic01_connect/";
  }
  //Post Method
  postData(objData, segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      this.http.post(this.baseURLAPI + segment, JSON.stringify(objData),
        { headers: headers }).subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  //get method
  getData(segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      this.http.get(this.baseURLAPI + segment, { headers: headers }).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });

  }

}

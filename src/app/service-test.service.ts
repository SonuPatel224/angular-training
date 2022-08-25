import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildServiceService } from './child-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private http:HttpClient) { }
  loger(){
    this.http.get("https://restcountries.com/v3.1/all").subscribe((response)=>{
      console.log(response);
    });
    console.log("I m come from service");
  }
  jwt(){
    this.http.get("https://w9oc5.sse.codesandbox.io/getToken").subscribe((res)=>{
      console.log(res);

    })
  }
}

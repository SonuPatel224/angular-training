import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}

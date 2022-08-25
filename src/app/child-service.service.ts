import { Injectable } from '@angular/core';
import { ServiceTestService } from './service-test.service';


@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {
  child(){
    console.log("hi child service");
    this.test.loger();

  }

  constructor(private test:ServiceTestService) { 
   
  }
  
}

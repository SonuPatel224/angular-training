import { Component, OnInit } from '@angular/core';
import { ChildServiceService } from './child-service.service';
import { ServiceTestService } from './service-test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  title = 'nandha';
  constructor(private service:ServiceTestService, private testchild:ChildServiceService){
    // this.service.loger();
    this.testchild.child();
  
  }
  ngOnInit(): void {
    this.service.jwt();
   // throw new Error('Method not implemented.');
  }
  ngOnInIt(){
    console.log("hey");
    this.service.loger();
    

  }
}

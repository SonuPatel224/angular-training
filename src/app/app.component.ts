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
    // this.testchild.child();
  
  }
  token ="";
  verify(){
   this.service.jwt("https://w9oc5.sse.codesandbox.io/verifyToken/"+this.token).subscribe((res)=>{
    console.log(res);
   })
  }
  ngOnInit(): void {
    console.log("hey");
  //  this.service.jwt();
   // throw new Error('Method not implemented.');
   this.service.jwt("https://w9oc5.sse.codesandbox.io/getToken").subscribe((res:any)=>{
    this.token=res.token;
    console.log(this.token)
     });
  }
  ngOnInIt(){
    console.log("hey");
    this.service.loger();
    // this.service.jwt("https://w9oc5.sse.codesandbox.io/getToken").subscribe((res:any)=>{
    //   this.token=res.data.token;
    //   console.log(this.token)
    //    });

  }
}

import { Component } from '@angular/core';
import { ServiceTestService } from './service-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nandha';
  constructor(private service:ServiceTestService){this.service.loger();}
  ngOnInIt(){
    console.log("hey");
    this.service.loger();
  }
}

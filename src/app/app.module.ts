import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceTestService } from './service-test.service';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ChildServiceService } from './child-service.service';
import { ReqInterceptorInterceptor } from './req-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceTestService,ChildServiceService,{provide:HTTP_INTERCEPTORS,useClass:ReqInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

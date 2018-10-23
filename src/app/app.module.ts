import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
 import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebServiceService } from 'src/app/services/web-service.service';
import { ProductViewComponent } from './product-view/product-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    SignUpComponent,
    SignInComponent,
    NotFoundComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:LandPageComponent},
      {path:'signup', component: SignUpComponent},
       {path:'signin',component:SignInComponent},
       {path:'view',component:ProductViewComponent},
       
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    WebServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

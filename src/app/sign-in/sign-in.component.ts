import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import {clientData} from '../../controllers/customer';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  customer:clientData;
  customerEmailNumberChecked:boolean;
  constructor(private WebServiceService:WebServiceService,private router:Router) { 
    if(! this.customer){
      this.customer={};
    } 
  }
  
  ngOnInit() {
  }

  login(customerEmailPhone){
    console.log(customerEmailPhone);
    this.customerEmailNumberChecked=this.WebServiceService.loginAuthority(customerEmailPhone.email,customerEmailPhone.mobileNumber);
    console.log(this.customerEmailNumberChecked);
    if(this.customerEmailNumberChecked ==true){
      this.router.navigate(['view']); 
    }
    else{
      
swal('Please Sign Up to access our system');
    }
  }

}

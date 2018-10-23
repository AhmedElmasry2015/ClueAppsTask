import { Injectable } from '@angular/core';
import {clientData} from '../../controllers/customer'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shoppingCart} from '../../controllers/shoopingCart';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
public _url='http://159.65.93.151:7000/api/v1/dash-board/product';
  constructor(private http:HttpClient) { }

  storageControll(action,key?,value?){
    if(action == 'set'){
      localStorage.setItem(key,value);
    }
    if(action == 'get'){
      localStorage.getItem(key);
   }
   }
   // add to Local Storage
   addLocalStorage(customer,customerEmail){
    if(this.storageControll('get',customerEmail,JSON.stringify(customer)) == null){
    this.storageControll('set',customerEmail,JSON.stringify(customer));
    return false;
    }
    else{
      return true;
    }
   }
   // check Email Existence or not
   checkEmailValidation(customerEmail){
     let customerEmailHolder;
     customerEmailHolder=JSON.parse(localStorage.getItem(customerEmail));
     console.log(customerEmailHolder);
     if(customerEmailHolder == null) {return true;}
     else{ return false;}
   }

   loginAuthority(customerEmail,phoneNumber){
     let loginCustomerCheck;
     let userPhoneCheck;
     loginCustomerCheck=this.checkEmailValidation(customerEmail);
     if(loginCustomerCheck ==true) {return false;}
     else{
      userPhoneCheck=JSON.parse(localStorage.getItem(customerEmail));
        if(userPhoneCheck.mobileNumber ==phoneNumber){
          return true;
        }
        else{
          return false;
        }
     }
   }
  //  :Observable<shoppingCart[]>
 getRealData(){
  // <shoppingCart[]>
   console.log(this.http.get(this._url));
  //  <shoppingCart[]>
   return this.http.get(this._url).pipe(map(res => res ));

 }
}

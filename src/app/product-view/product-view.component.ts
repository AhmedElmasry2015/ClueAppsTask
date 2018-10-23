import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import {shoppingCart} from '../../controllers/shoopingCart';
import { Observable } from 'rxjs';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  realData:shoppingCart[];     
  private families = [] ;
  public data =[];
  private productIamge=[];
  private productsObservable : Observable<any[]> ;
  start=6;
  end=12;
  constructor(private WebServiceService:WebServiceService) { 
    
  }
 
  ngOnInit() {

    this.WebServiceService.getRealData().subscribe(
      (respo:any ) =>{
        this.data=respo.data;
      
    } );
  
  }
 

}

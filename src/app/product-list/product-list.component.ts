import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string="Product list";
  products:Product[];
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  listFilter:string;
    errorMessage:string;


  constructor(private _productService:ProductService) { }

  ngOnInit():void {
    this._productService.getProducts().subscribe(
      products => this.products = products,error=>this.errorMessage = <any> error
    );
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(message:string):void{
    console.log(message);
  }


}

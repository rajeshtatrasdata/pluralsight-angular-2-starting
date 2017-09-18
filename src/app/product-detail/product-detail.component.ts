import { Component, OnInit } from '@angular/core';
import {Product} from "../product-list/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product Detail";
  product:Product;
  constructor(private _activatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
      let id = +this._activatedRoute.snapshot.params['id'];
      this.pageTitle += `: ${id}`;
  }

  onBack():void{
      this._router.navigate(['/products']);
  }

}

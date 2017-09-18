import { Injectable } from '@angular/core';
import {Product} from "../product-list/product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService {

  private _productUrl:string = "/src/api/products/products.json";
  constructor(private _http:Http) { }

    getProducts():Observable<Product[]>{

        return this._http.get(this._productUrl).map((response:Response)=><Product[]>response.json())
           // .do(data => console.log('All :'+JSON.stringify(data)))
            .catch(this.handleError);

    }

    private handleError(err:Response){
        console.log(err);
        return Observable.throw(err.json().error || 'Server error');
    }
}

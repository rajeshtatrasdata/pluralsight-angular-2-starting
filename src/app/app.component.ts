import { Component, OnInit } from '@angular/core';
import {ProductService} from "./services/product.service";

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  pageTitle :string = 'Acme product Management';
  constructor() { }

  ngOnInit() {
  }

}

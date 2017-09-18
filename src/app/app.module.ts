import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-list/product-filter.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './welcome/welcome.component';
import {ProductDetailGuard} from "./services/product-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      RouterModule.forRoot(
          [
              {
                  path: 'products', component: ProductListComponent
              },
              {
                  path: 'product/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent
              },
              {
                  path: 'welcome', component: WelcomeComponent
              },
              {
                  path: '', redirectTo: 'welcome', pathMatch: 'full'
              },
              {
                  path: '**', redirectTo: 'welcome', pathMatch: 'full'
              }
          ]
      )
  ],
  providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { TopCategoryBarComponent } from './home/top-category-bar/top-category-bar.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { SideCategoryBarComponent } from './home/side-category-bar/side-category-bar.component';
import { CategoryComponent } from './home/side-category-bar/category/category.component';
import { productReducer } from './store/products/product.reducer';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { RateComponent } from './common/rate/rate.component';
import { ProductComponent } from './home/product-list/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopCategoryBarComponent,
    ProductListComponent,
    SideCategoryBarComponent,
    CategoryComponent,
    FooterComponent,
    DetailComponent,
    AuthComponent,
    SearchComponent,
    RateComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }),
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

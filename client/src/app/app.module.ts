import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { TopCategoryBarComponent } from './home/top-category-bar/top-category-bar.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { SideCategoryBarComponent } from './home/side-category-bar/side-category-bar.component';
import { CategoryComponent } from './home/side-category-bar/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopCategoryBarComponent,
    ProductListComponent,
    SideCategoryBarComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

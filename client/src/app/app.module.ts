import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { TopCategoryBarComponent } from './home/top-category-bar/top-category-bar.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { SideCategoryBarComponent } from './home/side-category-bar/side-category-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopCategoryBarComponent,
    ProductListComponent,
    SideCategoryBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

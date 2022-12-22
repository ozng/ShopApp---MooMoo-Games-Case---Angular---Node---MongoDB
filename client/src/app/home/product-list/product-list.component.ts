import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.scss',
    './product-list.component.media.scss',
  ],
})
export class ProductListComponent {
  @Input() productList: any = [];
}

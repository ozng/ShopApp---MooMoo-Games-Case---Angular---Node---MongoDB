import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() productList: any = [];

  totalStar: any;

  ngOnInit(): void {
    for (let index = 0; index < this.productList.rating; index++) {
      this.totalStar.push(index);
    }

    console.log(this.totalStar);
  }
}

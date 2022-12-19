import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) {}

  navigateToDetailHandler() {
    this.router.navigate([`/detail/${this.product._id}`]);
  }

  totalStar: any = [];

  ngOnInit(): void {
    for (let index = 0; index < this.product.rating; index++) {
      this.totalStar.push(index);
    }

    this.totalStar.pop();
  }
}

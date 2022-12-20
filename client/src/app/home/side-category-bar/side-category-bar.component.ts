import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { getAllProduct } from 'src/app/store/products/product.actions';
import {
  sortByPriceLow,
  sortByPriceHigh,
  sortByMostRated,
  sortByExpire,
  sortByRecentlyAdded,
} from 'src/app/store/products/product.actions';

interface Category {
  id: string;
  name: string;
}

interface Categories {
  id: number;
  name: string;
  isShow: boolean;
  category: Category[];
}
@Component({
  selector: 'app-side-category-bar',
  templateUrl: './side-category-bar.component.html',
  styleUrls: ['./side-category-bar.component.scss'],
})
export class SideCategoryBarComponent {
  constructor(private store: Store, private productService: ProductService) {}

  oldIndex: number = -1;

  toggleCategory(categoryId: number) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === categoryId
    );

    if (this.oldIndex === categoryIndex) {
      this.categories[categoryIndex].isShow = false;
      this.oldIndex = -2;
      return;
    }

    this.oldIndex = categoryIndex;

    this.categories.forEach((item) => (item.isShow = false));

    this.categories[categoryIndex].isShow =
      !this.categories[categoryIndex].isShow;
  }

  isFilterShow: boolean = false;

  toggleFilter() {
    this.isFilterShow = !this.isFilterShow;
  }

  reFetchAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.store.dispatch(getAllProduct({ products: response }));
      },
    });

    this.categories.forEach((item) => (item.isShow = false));
    this.oldIndex = -1;
    this.isFilterShow = false;
  }

  filterProducts(id: number) {
    switch (id) {
      case 6:
        this.store.dispatch(sortByPriceLow());
        break;
      case 5:
        this.store.dispatch(sortByPriceHigh());
        break;
      case 4:
        this.store.dispatch(sortByMostRated());
        break;
      case 3:
        this.store.dispatch(sortByExpire());
        break;
      case 2:
        this.store.dispatch(sortByRecentlyAdded());
        break;
    }
  }

  sideFilters = [
    {
      id: 2,
      label: 'Recently Added',
    },
    {
      id: 3,
      label: 'Expiring Soon',
    },
    {
      id: 4,
      label: 'Most Rated',
    },
    {
      id: 5,
      label: 'Price: Low to High',
    },
    {
      id: 6,
      label: 'Price: High to Low',
    },
  ];

  categories: Categories[] = [
    {
      id: 1,
      name: 'Cell Phones & Smartphones',
      isShow: false,
      category: [
        {
          id: 'p1',
          name: 'Smartphone',
        },
        {
          id: 'p2',
          name: 'Tablet',
        },
      ],
    },
    {
      id: 2,
      name: 'Pcs & Laptops',
      isShow: false,
      category: [
        {
          id: 'l1',
          name: 'Personel Computer',
        },
        {
          id: 'l2',
          name: 'Laptop',
        },
        {
          id: 'l3',
          name: 'Hardware',
        },
      ],
    },
    {
      id: 3,
      name: 'Televisions',
      isShow: false,
      category: [
        {
          id: 't1',
          name: 'Television',
        },
        {
          id: 't2',
          name: 'Projection',
        },
      ],
    },
    {
      id: 4,
      name: 'Cameras',
      isShow: false,
      category: [
        {
          id: 'c1',
          name: 'Camera',
        },
        {
          id: 'c2',
          name: 'Accessory',
        },
      ],
    },
    {
      id: 5,
      name: 'Accessory',
      isShow: false,
      category: [
        {
          id: 'a1',
          name: 'Headphone',
        },
        {
          id: 'a2',
          name: 'Battery',
        },
        {
          id: 'a3',
          name: 'Phone Cases',
        },
      ],
    },
  ];
}

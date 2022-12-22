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
  styleUrls: [
    './side-category-bar.component.scss',
    './side-category-bar.component.media.scss',
  ],
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
      label: 'En Son Eklenen',
    },
    {
      id: 3,
      label: 'Kalan Stok',
    },
    {
      id: 4,
      label: 'En Yüksek Oy',
    },
    {
      id: 5,
      label: 'Fiyat: Düşükten Yükseğe',
    },
    {
      id: 6,
      label: 'Fiyat: Yüksekten Düşüğe',
    },
  ];

  categories: Categories[] = [
    {
      id: 1,
      name: 'Cep Telefonu & Akıllı Telefonlar',
      isShow: false,
      category: [
        {
          id: 'p1',
          name: 'Akıllı Telefonlar',
        },
        {
          id: 'p2',
          name: 'Tablet',
        },
      ],
    },
    {
      id: 2,
      name: 'PC & Laptoplar',
      isShow: false,
      category: [
        {
          id: 'l1',
          name: 'Kişisel Bilgisayarlar',
        },
        {
          id: 'l2',
          name: 'Laptoplar',
        },
        {
          id: 'l3',
          name: 'Donanım',
        },
      ],
    },
    {
      id: 3,
      name: 'Televizyonlar',
      isShow: false,
      category: [
        {
          id: 't1',
          name: 'Televizyonlar',
        },
        {
          id: 't2',
          name: 'Projeksiyonlar',
        },
      ],
    },
    {
      id: 4,
      name: 'Kameralar',
      isShow: false,
      category: [
        {
          id: 'c1',
          name: 'Kameralar',
        },
        {
          id: 'c2',
          name: 'Kamera Aksesuarları',
        },
      ],
    },
    {
      id: 5,
      name: 'Aksesuarlar',
      isShow: false,
      category: [
        {
          id: 'a1',
          name: 'Kulaklıklar',
        },
        {
          id: 'a2',
          name: 'Bataryalar',
        },
        {
          id: 'a3',
          name: 'Telefon Kılıfları',
        },
      ],
    },
  ];
}

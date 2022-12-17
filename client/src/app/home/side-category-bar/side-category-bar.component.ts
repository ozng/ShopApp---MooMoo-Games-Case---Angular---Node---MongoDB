import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-side-category-bar',
  templateUrl: './side-category-bar.component.html',
  styleUrls: ['./side-category-bar.component.scss'],
})
export class SideCategoryBarComponent {
  toggleCategory(categoryId: number) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === categoryId
    );

    this.categories[categoryIndex].isShow =
      !this.categories[categoryIndex].isShow;
  }

  sideFilters = [
    {
      id: 1,
      label: 'Recommended',
    },
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

  categories = [
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

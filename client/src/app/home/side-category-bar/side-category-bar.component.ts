import { Component } from '@angular/core';

@Component({
  selector: 'app-side-category-bar',
  templateUrl: './side-category-bar.component.html',
  styleUrls: ['./side-category-bar.component.scss'],
})
export class SideCategoryBarComponent {
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
    },
    {
      id: 2,
      name: 'Pcs & Laptops',
    },
    {
      id: 3,
      name: 'Televisions',
    },
    {
      id: 4,
      name: 'Cameras',
    },
    {
      id: 5,
      name: 'Accessory',
    },
  ];
}

import { Component } from '@angular/core';
interface Categories {
  id: number;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-top-category-bar',
  templateUrl: './top-category-bar.component.html',
  styleUrls: [
    './top-category-bar.component.scss',
    './top-category-bar.component.media.scss',
  ],
})
export class TopCategoryBarComponent {
  selectedCategoryID: number = 1;

  topCategories: Categories[] = [
    {
      id: 1,
      icon: 'checkroom',
      label: 'Clothing & Shoes',
    },
    {
      id: 2,
      icon: 'theaters',
      label: 'Entertainment',
    },
    {
      id: 3,
      icon: 'music_note',
      label: 'Music',
    },
    {
      id: 4,
      icon: 'fitness_center',
      label: 'Sport & Lifestyle',
    },
    {
      id: 5,
      icon: 'pets',
      label: 'Pets',
    },
    {
      id: 6,
      icon: 'soup_kitchen',
      label: 'Kitchen Accessories',
    },
    {
      id: 7,
      icon: 'luggage',
      label: 'Travel Equipment',
    },
    {
      id: 8,
      icon: 'psychiatry',
      label: 'Growing & Garden',
    },
    {
      id: 9,
      icon: 'power',
      label: 'Electrical Tools',
    },
    {
      id: 10,
      icon: 'baby_changing_station',
      label: 'Mother Care',
    },
    {
      id: 11,
      icon: 'toys',
      label: 'Toys & Entertainment',
    },
    {
      id: 12,
      icon: 'filter_vintage',
      label: 'Vintage',
    },
  ];

  selectCategory = (categoryID: number) => {
    this.selectedCategoryID = categoryID;
  };
}

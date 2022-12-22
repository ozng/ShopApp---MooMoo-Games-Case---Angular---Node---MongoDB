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
      label: 'Kıyafet & Ayakkabı',
    },
    {
      id: 2,
      icon: 'theaters',
      label: 'Eğlence',
    },
    {
      id: 3,
      icon: 'music_note',
      label: 'Müzik',
    },
    {
      id: 4,
      icon: 'fitness_center',
      label: 'Spor & Yaşam',
    },
    {
      id: 5,
      icon: 'pets',
      label: 'Evcil Hayvanlar',
    },
    {
      id: 6,
      icon: 'soup_kitchen',
      label: 'Mutfak',
    },
    {
      id: 7,
      icon: 'luggage',
      label: 'Gezi',
    },
    {
      id: 8,
      icon: 'psychiatry',
      label: 'Bahçe',
    },
    {
      id: 9,
      icon: 'power',
      label: 'Elektrikli Aletler',
    },
    {
      id: 10,
      icon: 'baby_changing_station',
      label: 'Annelere Özel',
    },
    {
      id: 11,
      icon: 'toys',
      label: 'Oyuncak & Eğlence',
    },
    {
      id: 12,
      icon: 'filter_vintage',
      label: 'Nostaljik',
    },
  ];

  selectCategory = (categoryID: number) => {
    this.selectedCategoryID = categoryID;
  };
}

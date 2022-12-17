import { Component, Input } from '@angular/core';

interface Category {
  name: string;
  id: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: Category[] = [];
}

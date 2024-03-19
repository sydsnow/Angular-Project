import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }
}

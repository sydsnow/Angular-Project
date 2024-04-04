import { Injectable } from '@angular/core';
import { CATEGORIES } from '../../data/categories';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }
  getCategories(): Category[] {
    return CATEGORIES;
  }
  getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find(category => category.slug === slug);
  }
}

import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { CategoryComponent } from '../category/category.component';
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [TagComponent, CategoryComponent],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
  categorySlug: string = '';
  tagSlug: string = '';

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.categorySlug = category.slug;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}

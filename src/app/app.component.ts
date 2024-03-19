import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Category } from './models/category';
import { Project } from './models/project';
import { Tag } from './models/tag';

import { CategoryComponent } from './components/category/category.component';
import { TagComponent } from './components/tag/tag.component';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    CategoryComponent,
    TagComponent,
    ProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular - Assignment 1';
  date = new Date();
  author = "Sydnee Snowball";

  //categories: Category[] | undefined;
  //projects: Project[] | undefined;
  //tags: Tag[] | undefined;

  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
  //filteredProjects: Project[] | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  // setCategoryFilter(category: Category): void {
  //   if (this.categoryFilter === category) {
  //     this.categoryFilter = undefined;
  //   } else {
  //     this.categoryFilter = category;
  //   }
  //   this.applyFilters();
  // }

  // isCategoryFilterActive(category: Category): boolean {
  //   return this.categoryFilter === category;
  // }

  // clearFilters(): void {
  //   this.categoryFilter = undefined;
  //   this.applyFilters();
  // }

  // applyFilters(): void {
  //   // Apply filters to projects based on the category filter
  //   this.filteredProjects = this.projects?.filter(project => {
  //     const categoryFilterMatch = !this.categoryFilter || project.category?.id === this.categoryFilter.id;
  //     return categoryFilterMatch;
  //   });
  //}

}
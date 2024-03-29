import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';


import { Category } from './models/category';
import { Project } from './models/project';
import { Tag } from './models/tag';

import { CategoryComponent } from './components/category/category.component';
import { TagComponent } from './components/tag/tag.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    CategoryComponent,
    TagComponent,
    ProjectComponent,
    ProjectDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  currentFilter: string = ''; // Variable to hold the current filter

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current route snapshot
        const currentRoute = this.route.snapshot;
        
        // Check if there are route parameters and extract the slug if available
        const slug = currentRoute.paramMap.get('slug');
        
        // Update the currentFilter variable
        this.currentFilter = slug || '';
      }
    });
  }
  title = 'Angular - Assignment 1';
  date = new Date();
  author = "Sydnee Snowball";

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

  selectedProject?: Project;

  setSelectedProject (project: Project) {
    this.selectedProject = project;
  }
  clearSelectedProject() {
    this.selectedProject = undefined;
  }
  
}
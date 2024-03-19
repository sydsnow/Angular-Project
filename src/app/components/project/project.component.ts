import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects';
import { ProjectService } from '../../services/project/project.service';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  constructor(private projectService: ProjectService) { }

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
  ngOnInit(): void {
    this.getProjects();
  }
  
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  @Input() selectedProject: Project | undefined;
  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
  }
  
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  isProjectHidden(project: any): boolean {
    if (this.categoryFilter && project.category && project.category.id !== this.categoryFilter.id) {
        return true;
    }
    if (this.tagFilter && project.tags) {
        return !project.tags.some((tag: Tag) => tag.id === this.tagFilter?.id);
    }
    return false;
  }
}

import { Component, Input, Output, EventEmitter, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';
import { LaptopComponent } from '../laptop/laptop.component';
import { FilterSectionComponent } from '../filter-section/filter-section.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    ProjectDetailComponent,
    LaptopComponent,
    FilterSectionComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit, AfterViewInit{
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private elRef: ElementRef,
    private renderer: Renderer2
   ) { }

  projects: Project[] = [];

  getProjects(): void {
    this.projectService.getProjects().subscribe((data) => (this.projects = data));
  }

  getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
    console.log(categorySlug);
    this.projectService.getProjectsByCategory(categorySlug).subscribe((data) => (this.projects = data));
  }

  getProjectsByTag(): void {
    const tagSlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService.getProjectsByTag(tagSlug).subscribe((data) => (this.projects = data));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      console.log(segment);
      if (segment === 'categories') {
        this.getProjectsByCategory();
      }
      else if (segment === 'tags') {
        this.getProjectsByTag();
      } 
      else {
        this.getProjects();
      }
    })
  }
  // Functionality for the hamburger nav on mobile
  ngAfterViewInit(): void {
    const hamburger = this.elRef.nativeElement.querySelector('.hamburger');
    const filterMenu = this.elRef.nativeElement.querySelector('.filter');
  
    this.renderer.listen(hamburger, 'click', () => {
      const isFilterMenuActive = filterMenu.classList.contains('active');
  
      if (!isFilterMenuActive) {
        filterMenu.classList.add('active');
      } else {
        filterMenu.classList.remove('active');
      }
        hamburger.classList.toggle('active');
    });
  }
  
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  selectedProject?: Project;

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
    if (this.categoryFilter && project.category && project.category.slug !== this.categoryFilter.slug) {
        return true;
    }
    if (this.tagFilter && project.tags) {
        return !project.tags.some((tag: Tag) => tag.id === this.tagFilter?.id);
    }
    return false;
  }
}

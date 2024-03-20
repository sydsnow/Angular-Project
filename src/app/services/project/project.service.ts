import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  getProject(id: number): Observable<Project> {
    const project = of(PROJECTS.find((project) => project.id === id)!);
    return project;
  }
  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter((project) => project.category?.slug === slug)!;
    console.log(projects);
    return of(projects);
  }
}

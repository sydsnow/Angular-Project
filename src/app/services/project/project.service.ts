import { Injectable } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  getProjects(): Project[] {
    return PROJECTS;
  }
}

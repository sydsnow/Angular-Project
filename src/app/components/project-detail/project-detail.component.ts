import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  project? : Project;

  getProject(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService.getProject(slug).subscribe((data) => (this.project = data));
  }
  
  ngOnInit(): void {
    this.getProject();
  }

  goBack(): void {
    this.location.back();
  }
}

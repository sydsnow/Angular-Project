import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  @Input() project? : Project;
}

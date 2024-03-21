import { Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectComponent, pathMatch: 'full' },
    { path: 'projects/:slug', component: ProjectDetailComponent },
    { path: 'projects/categories/:slug', component: ProjectComponent }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/material/mat.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({

  declarations: [
    DashboardComponent,
    CategoryComponent
  ],

  imports: [
    CommonModule,
    MatModule,
    RouterModule.forChild(routes),
  ],

})
export class AdminModule { }

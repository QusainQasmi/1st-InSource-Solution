import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '' , redirectTo: 'main' , pathMatch: 'full' },
  { path: 'main' , component : MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

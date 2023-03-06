import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutModule } from './main-layout/main-layout.module';

const routes: Routes = [
  { path: '', loadChildren: () => MainLayoutModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

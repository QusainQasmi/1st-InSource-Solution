import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./main-layout/main-layout.module').then(x => x. MainLayoutModule)},
  { path: 'category', loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

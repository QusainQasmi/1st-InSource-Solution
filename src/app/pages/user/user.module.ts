import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MatModule } from 'src/app/material/mat.module';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'main' , pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  declarations: [
    UserComponent,
    MainPageComponent,
    AboutUsComponent,
    ProductsComponent
  ],

  imports: [
    // BrowserModule,
    CommonModule,
    MatModule,
    RouterModule.forChild(routes),
  ],

 
})
export class UserModule { }

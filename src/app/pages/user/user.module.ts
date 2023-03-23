import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MatModule } from 'src/app/material/mat.module';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'main' , pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  declarations: [
    UserComponent,
    MainPageComponent,
    AboutUsComponent,
    ProductsComponent,
    FaqsComponent,
    ContactUsComponent
  ],

  imports: [
    CommonModule,
    MatModule,
    RouterModule.forChild(routes),
  ],

 
})
export class UserModule { }

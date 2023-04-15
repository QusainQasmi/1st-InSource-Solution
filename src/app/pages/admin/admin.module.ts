import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/material/mat.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { FaqsettingComponent } from './faqsetting/faqsetting.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'faqsetting', component: FaqsettingComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'subCategory', component: SubCategoryComponent },
  { path: 'notificationSetting', component: NotificationSettingComponent },
  { path: 'contact', component: ContactAdminComponent },
  { path: 'imageGallery', component: ImageGalleryComponent },
];

@NgModule({

  declarations: [
    DashboardComponent,
    CategoryComponent,
    FaqsettingComponent,
    CustomerComponent,
    ProductsComponent,
    OrderComponent,
    SubCategoryComponent,
    NotificationSettingComponent,
    ImageGalleryComponent,
    ContactAdminComponent
  ],

  imports: [
    CommonModule,
    MatModule,
    RouterModule.forChild(routes),
  ],

})
export class AdminModule { }

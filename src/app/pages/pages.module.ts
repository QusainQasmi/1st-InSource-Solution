import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatModule } from '../material/mat.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { BasicModule } from '../basicComponents/basic.module';
import { MainLayoutModule } from '../main-layout/main-layout.module';

@NgModule({
  declarations: [
    MainPageComponent,
  ],

  imports: [
    PagesRoutingModule,
    MainLayoutModule,
    BasicModule,
    MatModule
  ],

  providers: [],
  bootstrap: []
})
export class PagesModule { }

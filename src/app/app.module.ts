import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './material/mat.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MainlayoutComponent } from './main-layout/mainlayout/mainlayout.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { BasicModule } from './basicComponents/basic.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    AdminLayoutComponent,
  ],
  imports: [
    MatModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MainLayoutModule,
    BrowserModule,
    BasicModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

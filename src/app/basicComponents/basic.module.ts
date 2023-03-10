import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from '../material/mat.module';
import { NavberComponent } from './navber/navber.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavberComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatModule
  ],
  exports: [
    NavberComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: []
})
export class BasicModule { }

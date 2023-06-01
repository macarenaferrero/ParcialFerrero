import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error/error.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    NavComponent,
    FooterComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }

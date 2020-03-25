import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: SignupComponent }])
  ]
})
export class SignupModule { }

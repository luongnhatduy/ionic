import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ]
})
export class LoginModule {}

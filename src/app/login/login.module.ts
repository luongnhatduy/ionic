import { LoginComponent } from './login.component';
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ]
})
export class LoginModule {}

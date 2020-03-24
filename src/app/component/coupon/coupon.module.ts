import { CouponComponent } from "./coupon.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CouponComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: CouponComponent }])
  ]
})
export class CouponModule {}

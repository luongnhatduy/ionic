import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ShopDetailComponent } from "./shop-detail.component";

@NgModule({
  declarations: [ShopDetailComponent],
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ShopDetailComponent }])],
})
export class ShopDetailComponentModule {}

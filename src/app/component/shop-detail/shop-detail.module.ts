import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ShopDetailComponent } from "./shop-detail.component";

@NgModule({
  declarations: [ShopDetailComponent],
  imports: [CommonModule,IonicModule, RouterModule.forChild([{ path: '', component: ShopDetailComponent }])],
})
export class ShopDetailComponentModule {}

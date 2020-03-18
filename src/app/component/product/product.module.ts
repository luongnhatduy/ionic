import { ProductComponent } from "./product.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ProductComponent]
})
export class ProductModule {}

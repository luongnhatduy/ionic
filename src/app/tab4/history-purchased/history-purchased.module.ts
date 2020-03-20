import { HistoryPurchasedComponent } from "./history-purchased.component";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [HistoryPurchasedComponent],
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: "", component: HistoryPurchasedComponent }])
  ]
})
export class HistoryPurchasedModule {}

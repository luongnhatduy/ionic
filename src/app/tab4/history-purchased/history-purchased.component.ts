import { HistoryPurchasedService } from "./service/history-purchased.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history-purchased",
  templateUrl: "./history-purchased.component.html",
  styleUrls: ["./history-purchased.component.scss"]
})
export class HistoryPurchasedComponent implements OnInit {
  constructor(private historyPurchasedService: HistoryPurchasedService) {}

  listItem: any[];
  ngOnInit(): void {
    // this.listItem = JSON.parse(localStorage.getItem("buy"));
  }
  ionViewWillEnter(){
    this._getData();
  }
  async _getData() {
    this.listItem = await this.historyPurchasedService.getData();
    console.log(this.listItem, "newdata");
  }
}

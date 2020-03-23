import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history-purchased",
  templateUrl: "./history-purchased.component.html",
  styleUrls: ["./history-purchased.component.scss"]
})
export class HistoryPurchasedComponent implements OnInit {
  constructor() {}

  listItem: object[] = [];
  ngOnInit(): void {
    this.listItem = JSON.parse(localStorage.getItem("buy"));
  }
}

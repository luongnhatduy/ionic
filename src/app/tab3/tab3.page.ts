import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  constructor() {}

  listItem: object[] = [];
  ionViewWillEnter() {
    this.listItem = [];
    this.listItem = JSON.parse(localStorage.getItem("cart"));
  }
}

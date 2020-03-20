import { ShopService } from "./service/shop.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  listItem: object[] = [];
  constructor(private shopService: ShopService, private router: Router) {}
  ngOnInit(): void {
    this.shopService.getData(this._getData.bind(this));
  }
  _getData(data) {
    this.listItem = data;
  }
}

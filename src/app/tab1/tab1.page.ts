import { Router } from "@angular/router";
import { ShopService } from "./../service/shop.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  listItem: object[] = [];
  cl: boolean = false 
  constructor(private shopService: ShopService, private router: Router) {}
  ngOnInit(): void {
    this.listItem = this.shopService.listItem;
  }

  goToDetail() {
    console.log("asdads");
    this.router.navigate(["/tabs/shopDetail"]);
  }
}

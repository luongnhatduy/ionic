import { ShopService } from "./../../tab1/service/shop.service";
import {
  EventsService,
  EventData
} from "./../../common/events-service.service";
import { ProductService } from "./service/product.service";
import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() data: object[] = [];
  @Input() tabName: String;

  constructor(
    private router: Router,
    private productService: ProductService,
    private events: EventsService,
    private shopService: ShopService
  ) {}
  ngOnInit() {}

  goToDetail(item) {
    let itemString = JSON.stringify(item);
    this.router.navigate([
      `/shopDetail`,
      { item: itemString, tabName: this.tabName }
    ]);
  }
  favorite(item) {
    const idProduct = i => i._id.toString();
    const listIdProduct = this.data.map(idProduct);
    if (this.tabName == "tab2") {
      this.data.splice(listIdProduct.indexOf(item._id), 1);
    }
    this.shopService.setData(item);
    this.productService.favorite(item);
  }
}

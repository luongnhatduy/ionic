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
    private events: EventsService
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
    if (!item.status) {
      this.data[listIdProduct.indexOf(item._id)] = {
        ...this.data[listIdProduct.indexOf(item._id)],
        ...{ status: true }
      };
    } else {
      if (this.tabName == "tab2") {
        this.data.splice(listIdProduct.indexOf(item._id), 1);
      } else {
        this.data[listIdProduct.indexOf(item._id)] = {
          ...this.data[listIdProduct.indexOf(item._id)],
          ...{ status: false }
        };
      }
    }
    this.productService.favorite(item);

    this.tabName !== "tab1" &&
      this.events.publish(new EventData('favorite'));
  }
}

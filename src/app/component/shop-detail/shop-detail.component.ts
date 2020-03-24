import {
  EventsService,
  EventData
} from "./../../common/events-service.service";
import { async } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
  styleUrls: ["./shop-detail.component.scss"]
})
export class ShopDetailComponent implements OnInit {
  cl: boolean = true;
  item: any;
  count: number = 0;
  tabName: string;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    public toastController: ToastController,
    private events: EventsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = JSON.parse(params.item);
      this.tabName = params.tabName;
    });
  }

  // ngOnDestroy() {
  //   this.events.publish(new EventData("reloadPage"));
  // }
  async addCart() {
    const cart = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const idProduct = i => i._id.toString();
    const listId = cart.map(idProduct);
    if (listId.indexOf(this.item._id) !== -1) {
      cart[listId.indexOf(this.item._id)].count =
        cart[listId.indexOf(this.item._id)].count + 1;
    } else {
      cart.push({ ...this.item, ...{ count: 1 } });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    const toast = await this.toastController.create({
      color: "success",
      duration: 1000,
      message: "add success",
      position: "middle"
    });

    await toast.present();
  }
  async buy() {
    let itemString = JSON.stringify(this.item);
    this.route.navigate(["/coupon", { item: itemString, count: this.count }]);
  }
  reduction() {
    if (this.count > 0) {
      this.count--;
    }
  }
  increase() {
    this.count++;
  }
  goBack() {
    this.route.navigate([`tabs/${this.tabName}`]);
  }
}

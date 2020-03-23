import { async } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
  styleUrls: ["./shop-detail.component.scss"]
})
export class ShopDetailComponent implements OnInit {
  cl: boolean = true;
  item: any;
  constructor(
    private router: ActivatedRoute,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = JSON.parse(params.item);
    });
  }
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
    const buy = JSON.parse(localStorage.getItem("buy"))
      ? JSON.parse(localStorage.getItem("buy"))
      : [];
    buy.push(this.item);
    localStorage.setItem("buy", JSON.stringify(buy));

    const toast = await this.toastController.create({
      color: "success",
      duration: 1000,
      message: "buy success",
      position: "middle"
    });

    toast.present();
  }
}

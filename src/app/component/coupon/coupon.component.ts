import { CouponService } from "./service/coupon.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.scss"]
})
export class CouponComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private couponService: CouponService,
    private toastController: ToastController
  ) {}
  account: object[] = [];
  item: object[] = [];
  phone: number;
  address: String;
  count: number;
  ngOnInit() {
    this.account = JSON.parse(localStorage.getItem("user"));
    this.router.params.subscribe(params => {
      this.item = JSON.parse(params.item);
      this.count = JSON.parse(params.count);
    });
  }
  handlePhone(event) {
    this.phone = event.detail.value;
  }
  handleAddress(event) {
    this.address = event.detail.value;
  }
  buy() {
    this.couponService.buy(
      this.phone,
      this.address,
      this.item,
      this.count,
      this.callback.bind(this)
    );
  }
  async callback(message) {
    console.log(message);
    const toast = await this.toastController.create({
      color: "success",
      duration: 1000,
      message: message,
      position: "middle"
    });

    await toast.present();
  }
}

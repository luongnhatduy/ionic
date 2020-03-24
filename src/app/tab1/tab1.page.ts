import { ShopService } from "./service/shop.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { EventsService, EventData } from "./../common/events-service.service";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  listItem: object[] = [];

  bag: Subscription = new Subscription();

  constructor(
    private shopService: ShopService,
    private router: Router,
    public loadingController: LoadingController,
    private events: EventsService
  ) {}

  ngOnInit(): void {
    this.listItem = [];
    this.shopService.getData(this._getData.bind(this));
    this.presentLoading();

    this.bag.add(
      this.events.events$
        .pipe(filter(({ key }: EventData) => key == "favorite"))
        .subscribe(({ key, data }: EventData) => {
          this.listItem = [];
          this.shopService.getData(this._getData.bind(this));
          this.presentLoading();
        })
    );
  }

  ngOnDestroy() {
    this.bag && this.bag.unsubscribe();
  }

  _getData(data) {
    new Promise((resolve, reject) => {
      setTimeout(async () => {
        this.listItem = data;
        resolve();
      }, 1000);
    })
      .then(() => {
        this.loadingController.dismiss();
      })
      .catch(() => {});
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait..."
    });
    await loading.present();
  }
}

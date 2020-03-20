import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
  styleUrls: ["./shop-detail.component.scss"]
})
export class ShopDetailComponent implements OnInit {
  cl: boolean = true;
  item: object;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = JSON.parse(params.item)
    });
  }
  addCart(){
    
  }
}

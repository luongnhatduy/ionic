import { ProductService } from "./service/product.service";
import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() data: object[] = [];
  @Input() tabName: String;

  cl: boolean = true;
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    console.log(this.tabName, "tab");
  }
  goToDetail(item) {
    let itemString = JSON.stringify(item);
    this.router.navigate(["/tabs/shopDetail", { item: itemString }]);
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
      if (this.tabName == "tabFavorite") {
        this.data.splice(listIdProduct.indexOf(item._id), 1);
      } else {
        this.data[listIdProduct.indexOf(item._id)] = {
          ...this.data[listIdProduct.indexOf(item._id)],
          ...{ status: false }
        };
      }
    }

    this.productService.favorite(item);
  }
}

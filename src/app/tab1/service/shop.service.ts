import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  constructor(private http: HttpClient) {}
  listItem: any;
  getData(callback) {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.http.get(`http://localhost:3000/all/${accountLogin._id}`).subscribe({
      next: respon => {
        this.listItem = respon;
        callback();
        console.log(this.listItem, "list");
      },
      error: e => {},
      complete: () => {}
    });
  }

  setData(item) {
    const idProduct = i => i._id.toString();
    const listIdProduct = this.listItem.map(idProduct);
    if (!item.status) {
      this.listItem[listIdProduct.indexOf(item._id)] = {
        ...this.listItem[listIdProduct.indexOf(item._id)],
        ...{ status: true }
      };
    } else {
      this.listItem[listIdProduct.indexOf(item._id)] = {
        ...this.listItem[listIdProduct.indexOf(item._id)],
        ...{ status: false }
      };
    }
  }
}

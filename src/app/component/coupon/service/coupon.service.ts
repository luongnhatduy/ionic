import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CouponService {
  constructor(private http: HttpClient) {}

  buy(phone, address, item, count, callback) {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.http
      .post("http://localhost:3000/buy", {
        idUser: accountLogin._id,
        phone: phone,
        address: address,
        count: count,
        idProduct: item._id
      })
      .subscribe({
        next: respon => {
          console.log(respon);
          if (respon) {
            callback("Buy success");
          }
        },
        error: e => {
          callback("An error occurred. Please try again");
        },
        complete: () => {}
      });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  favorite(item) {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.http
      .post("http://localhost:3000/favorite", {
        idUser: accountLogin._id,
        id: item._id
      })
      .subscribe({
        next: respon => {
        },
        error: e => {},
        complete: () => {}
      });
  }
}

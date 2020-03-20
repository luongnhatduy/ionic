import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  constructor(private http: HttpClient) {}
  getData(callback) {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.http.get(`http://localhost:3000/all/${accountLogin._id}`).subscribe({
      next: respon => {
        callback(respon);
      },
      error: e => {},
      complete: () => {}
    });
  }
}

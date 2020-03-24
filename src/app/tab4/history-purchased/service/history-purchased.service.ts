import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HistoryPurchasedService {
  constructor(private http: HttpClient) {}
  getData() {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    return this.http
      .get<any[]>(`http://localhost:3000/productsPurchased/${accountLogin._id}`)
      .toPromise();
  }
}

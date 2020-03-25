import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"]
})
export class Tab4Page {
  name: String;
  age: Number;
  phone: Number;

  constructor(private router: Router) {}
  ngOnInit(): void {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.name = accountLogin.name;
    this.age = accountLogin.age;
    this.phone = accountLogin.phone;
  }
  gotoHistory() {
    this.router.navigate(["/historyPurchased"]);
  }
  logOut() {
    this.router.navigate([""]);
    localStorage.clear();
  }
}

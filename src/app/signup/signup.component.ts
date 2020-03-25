import { Router } from "@angular/router";
import { SignupService } from "./service/signup.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  userName: string;
  passWord: string;
  name: string;
  age: number;
  phone: number;
  display: string;

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    this.userName = "";
    this.passWord = "";
    this.name = "";
    this.age = null;
    this.phone = null;
  }

  signUp() {
    if (this.userName !== "" && this.passWord !== "") {
      this.signupService.signUp(
        this.userName,
        this.passWord,
        this.name,
        this.age,
        this.phone,
        this._display.bind(this)
      );
    }
  }
  _display(messenge) {
    if (messenge == "success") {
      this.router.navigate(["tab/tabs/tab1"]);
    } else {
      this.display = messenge;
    }
  }
}

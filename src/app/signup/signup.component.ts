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

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.userName = "";
    this.passWord = "";
    this.name = "";
    this.age = null;
    this.phone = null
  }

  handleUserName(event) {
    this.userName = event.detail.value;
  }
  handlePassWord(event) {
    this.passWord = event.detail.value;
  }
  handleName(event) {
    this.name = event.detail.value;
  }
  handleAge(event) {
    this.age = event.detail.value;
  }
  handlePhone(event) {
    this.phone = event.detail.value;
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
    this.display = messenge;
  }
}

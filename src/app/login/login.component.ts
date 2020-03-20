import { LoginService } from "./service/login.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userName: String;
  passWord: String;
  messenge: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.userName = "";
    this.passWord = "";
  }

  handleUserName(event) {
    this.userName = event.detail.value;
  }
  handlePassWord(event) {
    this.passWord = event.detail.value;
  }
  login() {
    if (this.userName !== "" && this.passWord !== "") {
      this.loginService.login(
        this.userName,
        this.passWord,
        this._display.bind(this)
      );
    }
  }
  _display(messenge) {
    this.messenge = messenge;
  }
}

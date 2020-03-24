import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  login(userName, passWord, cb) {
    this.http
      .post("http://localhost:3000/login", {
        userName: userName,
        passWord: passWord
      })
      .subscribe({
        next: respon => {
          console.log(respon)
          this.router.navigate(["/tabs/tab1"]);
          localStorage.setItem("user", JSON.stringify(respon));
        },
        error: e => {
          console.log(e)
          cb(e.error.errors);
        },
        complete: () => {}
      });
  }
}

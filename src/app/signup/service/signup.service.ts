import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private http: HttpClient,private router : Router ) {}
  signUp(userName, passWord, name, age, phone, callback) {
    this.http
      .post("http://localhost:3000/signUp", {
        userName: userName,
        passWord: passWord,
        name: name,
        age: age,
        phone: phone
      })
      .subscribe({
        next: respon => {
          this.router.navigate(["/tabs/tab1"]);
          localStorage.setItem("user", JSON.stringify(respon));
        },
        error: e => {
          callback(e.error.errors);
        },
        complete: () => {}
      });
  }
}

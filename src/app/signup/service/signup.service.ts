import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private http: HttpClient) {}
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
          localStorage.setItem("user", JSON.stringify(respon[0]));
          callback("success");
        },
        error: e => {
          callback(e.error.errors);
        },
        complete: () => {}
      });
  }
}

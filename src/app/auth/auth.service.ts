import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable()
export class AuthService {
  constructor(private jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    // Check whether the token is expired and return
    // true or false
    if (accountLogin._id) return accountLogin._id;
    return;
    // return !this.jwtHelper.isTokenExpired(accountLogin._id);
  }
}

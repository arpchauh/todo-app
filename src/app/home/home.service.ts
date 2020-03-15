import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "./home.model";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  loginObj = {} as login;

  constructor(private http: HttpClient) {}

  getLoggedIn() {
    const url = "https://todoapi000.herokuapp.com/api/login";
    return this.http.post<RegisterModel.RootObject>(url, this.loginObj);
  }
}

export interface login {
  email: string;
  password: string;
}

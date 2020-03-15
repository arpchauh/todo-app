import { Injectable } from "@angular/core";
import { RegisterModel } from "../home/home.model";

import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  registerObj = {} as register;

  constructor(private http: HttpClient) {}

  getRegister() {
    const url = "https://todoapi000.herokuapp.com/api/register";
    return this.http.post<RegisterModel.RootObject>(url, this.registerObj);
  }
}

export interface register {
  fullName: string;
  dob: Date;
  mobileNo: number;
  email: string;
  password: string;
}

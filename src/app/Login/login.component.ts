import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HomeService } from "../home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  submit = false;
  email: string;
  password: string;
  constructor(private loginService: HomeService, private route: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.submit = true;

    this.loginService.loginObj.email = this.email;
    this.loginService.loginObj.password = this.password;

    this.loginService.getLoggedIn().subscribe(res => {
      console.log(localStorage.getItem("BaseUrl"));
      console.log(res);
      if (res.success === 1) {
        this.route.navigateByUrl("/home");
      } else {
        alert("Enter Valid Details");
      }
    });
  }
}

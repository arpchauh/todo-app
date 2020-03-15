import { Component, OnInit } from "@angular/core";
import { RegisterService } from "./register.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  submit = false;
  fullName: string;
  dob: Date;
  mobileNo: number;
  email: string;
  password: string;

  constructor(
    private registerService: RegisterService,
    private route: Router
  ) {}

  ngOnInit() {}

  onsubmit() {
    this.submit = true;
    this.registerService.registerObj.fullName = this.fullName;
    this.registerService.registerObj.dob = this.dob;
    this.registerService.registerObj.mobileNo = this.mobileNo;
    this.registerService.registerObj.email = this.email;
    this.registerService.registerObj.password = this.password;

    console.log(this.registerService.registerObj);
    this.registerService.getRegister().subscribe(res => {
      console.log(res);
      if (res.success === 1) {
        this.route.navigateByUrl("/");
      } else {
        alert("Kindly fill full details");
      }
    });
  }
}

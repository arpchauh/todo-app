import { Component, OnInit } from "@angular/core";
import { TitleService } from "./title.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.css"]
})
export class TitleComponent implements OnInit {
  submit = false;
  title: string;
  startDate: Date;
  endDate: Date;
  shortDesc: string;
  desc: string;

  constructor(private taskService: TitleService, private route: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.submit = true;
    if (this.title.length <= 10) {
      this.taskService.titleObj.title = this.title;
    } else {
      alert("Kindly fill the title less than or equal to 10 characters");
    }
    this.taskService.titleObj.startDate = this.startDate;
    this.taskService.titleObj.endDate = this.endDate;
    this.taskService.titleObj.shortDesc = this.shortDesc;
    this.taskService.titleObj.desc = this.desc;

    console.log(this.taskService.titleObj);
    this.taskService.postTask().subscribe(res => {
      console.log(res);

      if (res.success === 1) {
        this.route.navigateByUrl("/home");
      }
    });
  }
}

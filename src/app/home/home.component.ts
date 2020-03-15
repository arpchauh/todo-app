import { Component, OnInit } from "@angular/core";
import { TaskModel } from "../title/title.model";
import { TitleService } from "../title/title.service";
import { Router } from "@angular/router";
import { DeleteService } from "./delete.service";
import { UpdateService } from "../update-title/update.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  getTask: TaskModel.RootObject;

  constructor(
    private titleService: TitleService,
    private route: Router,
    private deleteService: DeleteService
  ) {}

  ngOnInit() {
    this.titleService.getTask().subscribe(res => {
      this.getTask = res;
      console.log(res);
    });
  }

  deleteTask(id) {
    this.deleteService.id = id;
    this.deleteService.deleteTask().subscribe(res => {
      if (res.success === 1) {
        this.titleService.getTask().subscribe(res => {
          this.getTask = res;
          console.log(res);
        });
      }
    });
  }
}

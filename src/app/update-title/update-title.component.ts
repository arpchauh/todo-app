import { Component, OnInit } from "@angular/core";
import { UpdateService } from "./update.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-title",
  templateUrl: "./update-title.component.html",
  styleUrls: ["./update-title.component.css"]
})
export class UpdateTitleComponent implements OnInit {
  submit = false;
  title: string;
  startDate: Date;
  endDate: Date;
  shortDesc: string;
  desc: string;

  taskId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private updateService: UpdateService,
    private route: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.taskId = res.id;
      this.updateService.getUpdate(res.id).subscribe((res: any) => {
        console.log(res);
        this.title = res.data.title;
        console.log(new Date(res.data.startDate));
        this.startDate = new Date(res.data.startDate);
        this.endDate = new Date(res.data.endDate);
        this.shortDesc = res.data.shortDesc;
        this.desc = res.data.desc;
      });
    });
  }

  onUpdate() {
    this.submit = true;
    if (this.title.length <= 10) {
      this.updateService.updateObj.title = this.title;
    } else {
      alert("Kindly fill the title less than or equal to 10 characters");
      return;
    }
    this.updateService.updateObj.startDate = this.startDate;
    this.updateService.updateObj.endDate = this.endDate;
    this.updateService.updateObj.shortDesc = this.shortDesc;
    this.updateService.updateObj.desc = this.desc;
    console.log(this.taskId);

    this.updateService.update(this.taskId).subscribe(res => {
      console.log("updates res", res);
      if (res.success === 1) {
        alert("successfully updated");
      } else {
        alert("Kindly fill full details");
      }
    });
  }
}

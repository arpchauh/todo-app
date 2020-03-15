import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  translate;
  margin;
  constructor(private route: Router) {
    route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("current url", event.url); // event.url has current url
        // your code will goes here
        if (event.url === "/register") {
          this.translate = "translateY(-10%)";
        }
        if (event.url === "/title") {
          this.translate = "translateY(-7%)";
        }
        if (event.url === "/update") {
          this.translate = "translateY(-7)";
        }
      }
    });
  }

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  taskButton;

  constructor(private route: Router) {
    route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("current url", event.url);
        if (event.url === "/register") {
          this.taskButton = "none";
        }
        if (event.url === "/title") {
          this.taskButton = "none";
        }
        if (event.url === "/") {
          this.taskButton = "none";
        }
        if (event.url === "/home") {
          this.taskButton = "block";
        }
      }
    });
  }

  ngOnInit() {}
}

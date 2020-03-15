import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { TaskModel } from "./title.model";

@Injectable({
  providedIn: "root"
})
export class TitleService {
  titleObj = {} as title;

  constructor(private http: HttpClient) {}

  getTask() {
    const url = "https://todoapi000.herokuapp.com/api/todoList/";
    return this.http.get<TaskModel.RootObject>(url);
  }

  postTask() {
    const url = "https://todoapi000.herokuapp.com/api/todoList/";
    return this.http.post<TaskModel.RootObject>(url, this.titleObj);
  }
}

export interface title {
  title: string;
  startDate: Date;
  endDate: Date;
  shortDesc: string;
  desc: string;
}

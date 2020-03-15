import { Injectable } from "@angular/core";
import { UpdateModel } from "../update-title/update.model";
import { HttpClient } from "@angular/common/http";
import { getQueryPredicate } from "@angular/compiler/src/render3/view/util";

@Injectable({
  providedIn: "root"
})
export class UpdateService {
  updateObj = {} as update;
  url = "https://todoapi000.herokuapp.com/api/todoList/";
  constructor(private http: HttpClient) {}

  update(id) {
    console.log(id);

    return this.http.put<UpdateModel.RootObject>(this.url + id, this.updateObj);
  }

  getUpdate(id) {
    return this.http.get(this.url + id);
  }
}

export interface update {
  title: string;
  startDate: Date;
  endDate: Date;
  shortDesc: string;
  desc: string;
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DeleteService {
  id;
  constructor(private http: HttpClient) {}

  deleteTask() {
    const url = "https://todoapi000.herokuapp.com/api/todoList/" + this.id;
    return this.http.delete<{ success: number }>(url);
  }
}

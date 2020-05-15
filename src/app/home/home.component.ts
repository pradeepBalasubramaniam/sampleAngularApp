import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../services/get-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private api: GetDataService) {}

  UserInfo;
  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.UserInfo = this.api.getUsers();
    // this.f = this.api.firstRow();
  }
}

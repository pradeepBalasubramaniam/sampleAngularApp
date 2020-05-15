import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetDataService } from "../services/get-data.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: GetDataService) {}
  user: any;
  ngOnInit() {
    this.user = this.api.getUserByid(this.route.snapshot.paramMap.get("id"));
  }
}

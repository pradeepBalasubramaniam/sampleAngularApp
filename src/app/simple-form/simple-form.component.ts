import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.scss"]
})
export class SimpleFormComponent implements OnInit {
  name: FormControl;
  constructor() {
    this.name = new FormControl("");
  }

  ngOnInit() {}

  updateName() {
    this.name.setValue("Mike");
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-complex-form",
  templateUrl: "./complex-form.component.html",
  styleUrls: ["./complex-form.component.scss"]
})
export class ComplexFormComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["Lastname"],
      mobile: [
        "",
        [
          Validators.required,
          Validators.pattern(`^[0-9]{0,12}$`),
          Validators.minLength(10)
        ]
      ],
      address: this.formBuilder.group({
        street: [""],
        city: [""],
        state: [""],
        zip: [""]
      })
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }

  clear() {
    this.profileForm.reset();
  }

  onSubmit(values) {
    console.log(values);
  }
}

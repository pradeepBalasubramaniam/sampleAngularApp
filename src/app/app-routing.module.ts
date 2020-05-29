import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { GetDataService } from "./services/get-data.service";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "profile/:id",
    pathMatch: "full",
    component: UserProfileComponent
  },
  {
    path: "simple-form",
    pathMatch: "full",
    component: SimpleFormComponent
  },
  {
    path: "complex-form",
    pathMatch: "full",
    component: ComplexFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GetDataService]
})
export class AppRoutingModule {}

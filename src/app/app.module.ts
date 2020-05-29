import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PluralPipe } from "./pipe/plural.pipe";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SamplePipe } from "./sample.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { ComplexFormComponent } from './complex-form/complex-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PluralPipe,
    UserProfileComponent,
    SamplePipe,
    SimpleFormComponent,
    ComplexFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

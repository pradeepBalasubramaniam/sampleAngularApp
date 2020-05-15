import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PluralPipe } from './pipe/plural.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SamplePipe } from './sample.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PluralPipe,
    UserProfileComponent,
    SamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

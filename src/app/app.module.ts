import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Login/login.component";
import { HeaderComponent } from "./header/header.component";
import { RegistrationComponent } from "./registration/registration.component";
import { MainComponent } from "./main/main.component";
import { TitleComponent } from "./title/title.component";
import { UpdateTitleComponent } from "./update-title/update-title.component";
import { HomeComponent } from "./home/home.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    MainComponent,
    TitleComponent,
    UpdateTitleComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

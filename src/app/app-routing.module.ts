import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./Login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { Title } from "@angular/platform-browser";
import { TitleComponent } from "./title/title.component";
import { UpdateTitleComponent } from "./update-title/update-title.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      },
      { path: "register", component: RegistrationComponent },
      { path: "title", component: TitleComponent },
      { path: "update", component: UpdateTitleComponent }
    ]
  },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

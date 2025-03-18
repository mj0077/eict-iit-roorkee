import { Routes } from "@angular/router";
import { FacilitiesComponent } from "./pages/facilities/facilities.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
// import { RegisterComponent } from "./MyComponents/register/register.component";
// import { LoginComponent } from "./MyComponents/login/login.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },

  { path: "facilities", component: FacilitiesComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
];

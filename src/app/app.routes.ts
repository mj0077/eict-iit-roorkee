import { Routes } from "@angular/router";
<<<<<<< Updated upstream
import { EictAboutUsComponent } from "./pages/eict-about-us/eict-about-us.component";
import { EictFacilitiesComponent } from "./pages/eict-facilities/eict-facilities.component";
import { EictHomePageComponent } from "./pages/eict-home-page/eict-home-page.component";

export const routes: Routes = [
  { path: "", component: EictHomePageComponent },
  { path: "home", component: EictHomePageComponent },
  { path: "facilities", component: EictFacilitiesComponent },
  { path: "about-us", component: EictAboutUsComponent },
=======
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 2d081f366ec5593bde5a791ed05211b83f31d2a7
];

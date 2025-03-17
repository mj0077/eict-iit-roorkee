import { Routes } from "@angular/router";
import { FacilitiesComponent } from "./pages/facilities/facilities.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },

  { path: "facilities", component: FacilitiesComponent },
];

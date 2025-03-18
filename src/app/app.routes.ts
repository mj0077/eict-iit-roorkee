import { Routes } from "@angular/router";
import { EictAboutUsComponent } from "./pages/eict-about-us/eict-about-us.component";
import { EictFacilitiesComponent } from "./pages/eict-facilities/eict-facilities.component";
import { EictHomePageComponent } from "./pages/eict-home-page/eict-home-page.component";

export const routes: Routes = [
  { path: "", component: EictHomePageComponent },
  { path: "home", component: EictHomePageComponent },
  { path: "facilities", component: EictFacilitiesComponent },
  { path: "about-us", component: EictAboutUsComponent },
];

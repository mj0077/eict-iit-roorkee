import { Component } from "@angular/core";
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: "app-eict-home-page",
  imports: [PageHeadingComponent, HeroComponent],
  templateUrl: "./eict-home-page.component.html",
  styleUrl: "./eict-home-page.component.css",
})
export class EictHomePageComponent {}

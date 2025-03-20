import { Component } from "@angular/core";
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { EictComputingImageComponent } from "../eict-facilities/eict-computing-image/eict-computing-image.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-eict-about-us",
  imports: [PageHeadingComponent, EictComputingImageComponent],
  templateUrl: "./eict-about-us.component.html",
  styleUrl: "./eict-about-us.component.css",
})
export class EictAboutUsComponent {
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate(["/about-more"]);
  }
}

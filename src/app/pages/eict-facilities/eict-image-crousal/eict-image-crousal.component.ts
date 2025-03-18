import { CommonModule, NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-eict-image-crousal",
  imports: [NgFor, CommonModule],
  templateUrl: "./eict-image-crousal.component.html",
  styleUrl: "./eict-image-crousal.component.css",
})
export class EictImageCrousalComponent {
  @Input() images: string[] = [];
  // images: string[] = [
  //   "/assets/icons/test1.jpg",
  //   "/assets/icons/img1.png",
  //   "/assets/icons/test1.jpg",
  // ];
}

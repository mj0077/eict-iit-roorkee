import { Component, Input } from "@angular/core";

@Component({
  selector: "app-eict-computing-image",
  imports: [],
  templateUrl: "./eict-computing-image.component.html",
  styleUrl: "./eict-computing-image.component.css",
})
export class EictComputingImageComponent {
  @Input() image!: string;
}

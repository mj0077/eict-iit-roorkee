import { NgStyle } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
@Component({
  selector: "app-page-heading",
  imports: [NgStyle],
  templateUrl: "./page-heading.component.html",
  styleUrl: "./page-heading.component.css",
})
export class PageHeadingComponent implements OnInit {
  @Input() value: string = "";
  @Input() backgroundImage!: string;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log("Background Image:", this.backgroundImage);
    console.log("Background Image:", this.value);
  }
}

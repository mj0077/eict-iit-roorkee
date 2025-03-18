import { Component } from "@angular/core";
import { PageHeadingComponent } from "../page-heading/page-heading.component";

@Component({
  selector: "app-eict-facilities",
  imports: [PageHeadingComponent],
  templateUrl: "./eict-facilities.component.html",
  styleUrl: "./eict-facilities.component.css",
})
export class EictFacilitiesComponent {
  labs = [
    { icon: "📡", name: "Advanced Microwave Laboratory " },
    { icon: "📡", name: "Solid State Devices Laboratory" },
    { icon: "📡", name: "Wireless Communications Laboratory" },
    { icon: "📡", name: "Communication Systems Laboratory" },
    { icon: "📡", name: "Signal Processing Laboratory" },
    { icon: "🔬", name: "Microelectronics Laboratory" },
    { icon: "🔬", name: "Digital Electronics Laboratory" },
    { icon: "💻", name: "Computing and Design Automation (CoDA) Lab" },
    { icon: "🔬", name: "High Performance Computing Lab" },
    { icon: "🔬", name: "Information and Network Security Lab" },
    { icon: "⚡", name: "Data Mining Lab" },
    { icon: "💾", name: "High-Performance Computing Lab" },
    { icon: "🔍", name: "VLSI Design Laboratory" },
    { icon: "🔒", name: "Network Security Lab" },
    { icon: "🔒", name: "Computers Lab 1" },
    { icon: "🔒", name: "Computers Lab 2" },
  ];
}

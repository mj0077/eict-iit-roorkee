import { Component } from "@angular/core";
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { CommonModule, NgFor } from "@angular/common";

@Component({
  selector: "app-eict-partner",
  imports: [PageHeadingComponent, NgFor, CommonModule],
  templateUrl: "./eict-partner.component.html",
  styleUrl: "./eict-partner.component.css",
})
export class EictPartnerComponent {
  partners = [
    {
      name: "National Institute of Technology Hamirpur",
      logo: "/assets/images/NIT.png",
    },
    {
      name: "Shri Mata Vaishno Devi University, Katra",
      logo: "assets/images/shrimata.png",
    },
    {
      name: "University of Jammu,Jammu Tawi",
      logo: "assets/images/universityOfjammu.png",
    },
    {
      name: "Chitkara University, Himachal Pradesh",
      logo: "assets/images/chitkara.png",
    },
    {
      name: "Gurukul Kangri Vishwavidyalaya, Haridwar",
      logo: "assets/images/gurukul.png",
    },
    {
      name: "G.B.Pant University of Agriculture & Technology, Pantnagar",
      logo: "assets/images/gbpant.png",
    },
    {
      name: "Graphic Era Deemed to be University, Dehradun",
      logo: "assets/images/GraphicEra.png",
    },
    {
      name: "Inderprastha Engineering College, Ghaziabad",
      logo: "assets/images/ipec.png",
    },
    {
      name: "Ajay Kumar Garg Engineering College, Ghaziabad",
      logo: "assets/images/ajaykumar.png",
    },
  ];
}

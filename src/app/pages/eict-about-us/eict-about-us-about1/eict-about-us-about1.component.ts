import { Component } from "@angular/core";
import { PageHeadingComponent } from "../../page-heading/page-heading.component";
import { EictComputingImageComponent } from "../../eict-facilities/eict-computing-image/eict-computing-image.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { CommonModule, NgFor } from "@angular/common";

@Component({
  selector: "app-eict-about-us-about1",
  imports: [
    PageHeadingComponent,
    EictComputingImageComponent,
    MatGridListModule,
    MatCardModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: "./eict-about-us-about1.component.html",
  styleUrl: "./eict-about-us-about1.component.css",
})
export class EictAboutUsAbout1Component {
  cards = [
    {
      image: "/assets/images/course1.png",
      description:
        "Conduct one-week short courses/ FDPs/ Certificate courses with an emphasis on hands-on learning in basic/advanced topics and emerging technologies in the E&ICT domain.",
    },
    {
      image: "/assets/images/course2.png",
      description:
        "Set up the activity centers to conduct one-week short courses/ FDPs/ Certificate courses locally at institutes/colleges.",
    },
    {
      image: "/assets/images/course3.png",
      description:
        "Continuing Education Programs for engineering graduates and working professionals to enhance their knowledge upgradation and employability.",
    },
    {
      image: "/assets/images/course4.png",
      description:
        "Design, development, and delivery of specialized modules specific to research areas and industry.",
    },
  ];

  card = [
    {
      text: "Facilitate faculties and industry professionals to be abreast with the latest developments in technology and emerging industry needs.",
    },
    {
      text: "Hands-on learning with an emphasis on emerging areas of the E&ICT domain.",
    },
    {
      text: "Enhance teaching and research capabilities by involving the resource persons from academia, industry, and R&D organizations.",
    },
    {
      text: "Provide training to the faculty of institutes/colleges, which would result in improvement of the quality of students thereby making them industry-ready and employable in the Electronics & ICT related industry.",
    },
    {
      text: "Academy trained faculty are expected to have the cascading effect to develop skills of the students in parent institutes.",
    },
    { text: "Capacity building in the area of Electronics & ICT." },
  ];
}

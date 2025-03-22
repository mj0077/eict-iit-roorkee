import { Component } from "@angular/core";
import { HeroComponent } from "../hero/hero.component";
import { LoginComponent } from "../../MyComponents/login/login.component";
import { RegisterComponent } from "../../MyComponents/register/register.component";

@Component({
  selector: "app-eict-home-page",
  // imports: [PageHeadingComponent, HeroComponent, LoginComponent, RegisterComponent],
  imports: [HeroComponent, LoginComponent, RegisterComponent],
  templateUrl: "./eict-home-page.component.html",
  styleUrl: "./eict-home-page.component.css",
})
export class EictHomePageComponent {

  statistics = [
    { 
      icon: 'certificate', 
      title: 'Get Certified from E&ICT Academy', 
      subtitle: 'IIT Roorkee' 
    },
    { 
      icon: 'education', 
      title: 'Learn from IIT Roorkee Professors', 
      subtitle: '' 
    },
    { 
      icon: 'users', 
      title: 'Benificiaries Trained', 
      subtitle: '15,000+' 
    },
    { 
      icon: 'industry', 
      title: 'Industry Partners', 
      subtitle: '20+' 
    }
  ];

  notices = [
    {
      title: 'Lorem Ipsum',
      content: 'Morbi nulla tortor, ullamcorper ut eleifend a, eleifend lacus. Curabitur malesuada pellentesque nunc et congue. Proin vitae odio volutpat facilisis.',
      date: 'Dec 12, 2023'
    }
    // Add more notices as needed
  ];
}

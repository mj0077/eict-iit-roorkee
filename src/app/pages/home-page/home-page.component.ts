import { Component } from '@angular/core';
import { HeroComponent } from "../../MyComponents/hero/hero.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { EictFooterComponent } from './MyComponents/eict-footer/eict-footer.component';
import { LoginComponent } from './MyComponents/login/login.component';

@Component({
  selector: 'app-root',
  imports: [EictFooterComponent, LoginComponent],
  // imports: [RouterOutlet, EictFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eict-iit-roorkee';
}

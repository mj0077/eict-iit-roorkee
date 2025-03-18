import { Component } from "@angular/core";
// import { RouterOutlet } from '@angular/router';
import { EictHeaderComponent } from "./MyComponents/eict-header/eict-header.component";
import { LoginComponent } from "./MyComponents/login/login.component";
import { RegisterComponent } from "./MyComponents/register/register.component";
import { EictFooterComponent } from "./MyComponents/eict-footer/eict-footer.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    EictHeaderComponent,
    EictFooterComponent,
    LoginComponent,
    RegisterComponent,
    RouterModule,
  ],
  // imports: [RouterOutlet, EictFooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "eict-iit-roorkee";
}

// eict-footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eict-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eict-footer.component.html',
  styleUrl: './eict-footer.component.css'
})
export class EictFooterComponent {
  currentYear = new Date().getFullYear();
}

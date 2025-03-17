// eict-header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-eict-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './eict-header.component.html',
  styleUrl: './eict-header.component.css'
})
export class EictHeaderComponent {
  phoneNumber: string = '+91-1332 286457';
  email: string = 'eict@iitr.ac.in';
  
  navItems = [
    { label: 'Home', route: '/home', active: true },
    { label: 'About Us', route: '/about-us' },
    { label: 'Programs', route: '/programs', hasDropdown: true },
    { label: 'Partners', route: '/partners', hasDropdown: true },
    { label: 'Facilities', route: '/facilities' },
    { label: 'Contact us', route: '/contact-us' },
  ];
  
  socialLinks = [
    { icon: 'youtube', url: '#' },
    { icon: 'linkedin', url: '#' },
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'instagram', url: '#' }
  ];
}
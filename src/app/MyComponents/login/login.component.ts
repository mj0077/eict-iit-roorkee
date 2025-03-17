import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  
  showPassword = false;
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  onSubmit() {
    // Handle login submission
    console.log('Login attempted with:', this.loginData);
    // Add your authentication logic here
  }
  
  loginWithGoogle() {
    // Implement Google login
    console.log('Google login clicked');
  }
  
  loginWithLinkedIn() {
    // Implement LinkedIn login
    console.log('LinkedIn login clicked');
  }
  
  closeModal() {
    // Close the modal
    console.log('Modal closed');
    // Add your close logic here
  }
}
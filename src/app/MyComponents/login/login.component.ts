import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalService } from '../../services/modal.service';

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
  
  constructor(public modalService: ModalService) {}
  
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
    this.modalService.hideLoginModal();
  }

  openRegisterModal() {
    this.modalService.hideLoginModal();
    this.modalService.showRegisterModal();
    console.log("Register modal opened");
  }
}
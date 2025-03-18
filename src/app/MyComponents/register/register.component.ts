import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    public modalService: ModalService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
      // Add your registration logic here
    }
  }

  continueWithGoogle(): void {
    // Implement Google authentication
    console.log('Continue with Google clicked');
  }

  continueWithLinkedIn(): void {
    // Implement LinkedIn authentication
    console.log('Continue with LinkedIn clicked');
  }

  closeModal(): void {
    this.modalService.hideRegisterModal();
  }

  openLoginModal(): void {
    this.modalService.hideRegisterModal();
    this.modalService.showLoginModal();
  }
}
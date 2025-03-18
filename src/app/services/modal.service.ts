import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  loginModalVisible: boolean = false;
  registerModalVisible: boolean = false;

  showLoginModal() {
    this.loginModalVisible = true;
    this.registerModalVisible = false;
  }

  showRegisterModal() {
    this.registerModalVisible = true;
    this.loginModalVisible = false;
  }

  hideLoginModal() {
    this.loginModalVisible = false;
  }

  hideRegisterModal() {
    this.registerModalVisible = false;
  }
} 
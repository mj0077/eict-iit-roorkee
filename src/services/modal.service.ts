import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private loginModalVisible = new BehaviorSubject<boolean>(false);
  private registerModalVisible = new BehaviorSubject<boolean>(false);

  loginModalVisible$ = this.loginModalVisible.asObservable();
  registerModalVisible$ = this.registerModalVisible.asObservable();

  showLoginModal() {
    this.loginModalVisible.next(true);
  }

  showRegisterModal() {
    this.registerModalVisible.next(true);
  }

  hideLoginModal() {
    this.loginModalVisible.next(false);
  }

  hideRegisterModal() {
    this.registerModalVisible.next(false);
  }
} 
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  role : string = '';

  getRole(role: string) {
    this.role = role;
  }

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}

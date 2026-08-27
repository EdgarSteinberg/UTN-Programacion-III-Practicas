import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /*  onSubmit(event: Event, name: string, password: string) {
 
     event.preventDefault();
 
     console.log('Nombre:', name);
     console.log('Password:', password);
 
     name = '';
     password = '';
   } */

  onSubmit(
    event: Event,
    nameInput: HTMLInputElement,
    passwordInput: HTMLInputElement
  ) {
    event.preventDefault();

    console.log('Nombre:', nameInput.value);
    console.log('Password:', passwordInput.value);

    nameInput.value = '';
    passwordInput.value = '';
  }
}
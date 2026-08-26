import { Component, signal } from '@angular/core';
/* import { RouterOutlet } from '@angular/router'; */
import { LoginComponent } from './loginComponet/login';
import { AppComponent } from './appComponent';

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet */  AppComponent, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hola_mundo_angular');
}

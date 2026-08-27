import { Component, signal } from '@angular/core';
/* import { RouterOutlet } from '@angular/router'; */
import { AppComponent } from './appComponent';
import { LoginComponent } from './loginComponent/login';
import { ChatComponent } from './chatComponent/chat';

@Component({
  selector: 'app-root',
  imports: [ AppComponent, LoginComponent, ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hola_mundo_angular');
}

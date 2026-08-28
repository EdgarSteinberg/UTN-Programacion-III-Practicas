import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  // Este es el mensaje que recibe desde el padre(contador)
  @Input() recibeMessage?: string ;
}

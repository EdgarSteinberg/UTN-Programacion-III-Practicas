import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  // Este es el mensaje que recibe desde el padre(contador)
  @Input() recibeMessage?: string;

  // Comunicacion entre hijo al padre
  @Output() mensajeDesdeMessages = new EventEmitter<string>();

  mensaje = '';

  enviarMensaje() {
    this.mensajeDesdeMessages.emit(this.mensaje);
  }
}

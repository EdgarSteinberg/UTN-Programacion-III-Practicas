import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

    @Output() mensajeDesdeElHijo = new EventEmitter<string>();

    mensaje = '';

    enviarMensaje(){
      this.mensajeDesdeElHijo.emit(this.mensaje);
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensajeRecibido = '';

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }

  mensajeInput = '';        // Lo que estás escribiendo
  mensajeDesdeElpadre = ''; // Lo que efectivamente enviás al hijo

  enviarMensaje() {
    this.mensajeDesdeElpadre = this.mensajeInput;
  }
}

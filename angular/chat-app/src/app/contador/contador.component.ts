import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  valorContador: number = 0;

  mensajeDesdeContador = 'Mesansaje desde el contador(padre) props?'
  
  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }
}

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

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }
}

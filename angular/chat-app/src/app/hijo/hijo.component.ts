import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  mensaje: string = '';

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  incrementar(){
    this.incrementarDesdeHijo.emit();
  }

  decrementar(){
    this.decrementarDesdeHijo.emit();
  }
}

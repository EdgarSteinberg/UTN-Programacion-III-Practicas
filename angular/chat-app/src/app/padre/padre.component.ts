import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

  nombre?: string;
  fecha? : Date = new Date();
  
  constructor(private _servicioFamiliar: ServicioFamiliarService) { }

  //Servicio
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juanchi');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  /*   mensajeRecibido = '';
  
    recibirMensaje($event: string) {
      this.mensajeRecibido = $event;
    }
  
    //CONTADOR
  
    valorContador: number = 0;
  
    incrementar() {
      this.valorContador++;
    }
  
    decrementar() {
      this.valorContador--;
    } */
}

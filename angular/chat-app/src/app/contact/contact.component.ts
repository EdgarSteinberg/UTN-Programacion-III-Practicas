import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['',[ Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  enviar() {
    console.log(this.formularioContacto)
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }
  /*  
   formulario plantilla
  public usuario: any = {
      nombre: '',
      email: ''
    }
  
    enviar(){
      console.log(this.usuario);
    } */
}

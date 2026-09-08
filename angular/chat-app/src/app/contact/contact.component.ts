import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';

  /* usuarioActivo : string = 'Pedro'; */
  /*   usuarioActivo: any = ({
      nombre: 'Pedro',
      apellido: 'Morales',
      dni: '35100503'
    }) */

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['',],
      tipoDni: ['',],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();

    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
    })
  }

  ngOnDestroy(): void {
    console.log('se destruyo el componente')
  }

   hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }

  enviar() {
    console.log(this.formularioContacto)
  }
  /*   
      ngOnInit(): void {
      this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo); 
        if(this.usuarioActivo.apellido == '') this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]) 
      this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)])
      this.formularioContacto.patchValue({
        nombre: this.usuarioActivo.nombre,
        apellido: this.usuarioActivo.apellido,
        dni: this.usuarioActivo.dni
      })
      this.formularioContacto.get('nombre')?.disable();
      this.formularioContacto.get('apellido')?.disable();
      this.formularioContacto.get('dni')?.disable();
  
    } */



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

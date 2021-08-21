import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //formulario reactivo
  miFormulario!:FormGroup;

  constructor() {

    //definicion
    this.miFormulario = new FormGroup({
      'nombre': new FormControl('Josue Guardado'),
      'telefono': new FormControl('7000-0000')
    });
   }

  ngOnInit(): void {
  }

}

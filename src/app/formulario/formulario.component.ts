import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.miFormulario = new FormGroup({ //PIPES angular  {{  compra.total | currency }} =  $10.14
      'nombre': new FormControl('',[Validators.required,Validators.minLength(4)]), 
      'telefono': new FormControl('0000-0000',[Validators.required])
    });
   }

  ngOnInit(): void {
  }

  enviar():void{

     console.log(this.miFormulario.value);
     console.log(this.miFormulario.valid);
     
     console.log("El nombre ingresado= "+ this.miFormulario.controls['nombre'].value); //extrayendo el valor de un control
     console.log("El nombre es válido?= "+ this.miFormulario.controls['nombre'].valid); // conociendo si es valido o no
  }

}

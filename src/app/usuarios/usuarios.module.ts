import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [
    RegistroComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }

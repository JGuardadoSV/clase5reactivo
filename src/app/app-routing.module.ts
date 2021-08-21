import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './usuarios/registro/registro.component';

const routes: Routes = [
//localhost:4200/ruta1 
  {path:"ruta1",component:ListadoComponent},
  {path:"ruta2",component:FormularioComponent},
  {path:"ruta3",component:RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

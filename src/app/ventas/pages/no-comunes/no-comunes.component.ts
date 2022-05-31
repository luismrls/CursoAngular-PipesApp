import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Luis';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona() {

    if(this.nombre === "Luis") {
      this.nombre = 'Xilenna';
      this.genero = 'femenino';
    }else {
      this.nombre = 'Luis';
      this.genero = 'Masculino';
    }
    
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Luis', 'Ximena', 'Xilena'];
  
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  eliminarPersona() {
    this.clientes.pop();
  }

  agregarPersona() {
    this.clientes.push("Persona");
  }

  //keyValue Pipe
  persona = {
    nombre: 'Luis',
    edad: 20,
    direccion: 'Suiza'
  }

  // Json pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

}

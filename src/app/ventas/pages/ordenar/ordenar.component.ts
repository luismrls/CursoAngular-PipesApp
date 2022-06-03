import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Deredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  ordenarPor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMyuscula(){
    (this.enMayusculas)? this.enMayusculas = false : this.enMayusculas = true;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}

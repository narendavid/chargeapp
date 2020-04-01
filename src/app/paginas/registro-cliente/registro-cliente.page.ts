import { Component, OnInit } from '@angular/core';
import { MainService } from "../../servicios/main.service";

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  clienteNuevo = {
    nombre: "",
    telefono: "",
    direccion: "",
    cedula: "",
    fechaR: new Date()
  }

  constructor(private mainService: MainService) { }

  registrarCliente(){
    this.mainService.registrarCliente(this.clienteNuevo)
    alert("Cliente registrado exitosamente!")
  }

  ngOnInit() {
  }

}

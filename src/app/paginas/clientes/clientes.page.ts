import { Component, OnInit } from '@angular/core';
import { MainService } from '../../servicios/main.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  
  arregloClientes
  clientes: Observable<any[]>;
  textoBuscar: string = ''

  constructor(private mainService: MainService, private router: Router) {
    this.clientes = this.mainService.getClientes()
    this.obtenerClientes()
    setTimeout(()=>console.log(this.arregloClientes),3000)
  }

  buscar(event){
    this.textoBuscar = event.detail.value
  }

  obtenerClientes(){
    this.mainService.getClientes().subscribe( d => this.arregloClientes = d)
  }

  verDetalles(id) {
    this.mainService.cliente = id;
    this.router.navigate(['detalle-cliente'])
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MainService } from '../../servicios/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.page.html',
  styleUrls: ['./detalle-cliente.page.scss'],
})
export class DetalleClientePage implements OnInit {

  deudas: Observable<any[]>
  clienteU: Observable<any[]>

  constructor(private mainService: MainService) {
    this.getCliente()
    this.getDeudas()
  }

  getCliente() {
    this.clienteU = this.mainService.getClienteUnico();
  }

  getDeudas() {
    this.deudas = this.mainService.getDeudasCliente()
  }

  ngOnInit() {
  }

}

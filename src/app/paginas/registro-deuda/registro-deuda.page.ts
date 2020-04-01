import { Component, OnInit } from '@angular/core';
import { MainService } from '../../servicios/main.service';

@Component({
  selector: 'app-registro-deuda',
  templateUrl: './registro-deuda.page.html',
  styleUrls: ['./registro-deuda.page.scss'],
})
export class RegistroDeudaPage implements OnInit {

  deuda = {
    monto: 0,
    periodo: '',
    cuotas: []
  }

  bandera = false
  cedulaCliente
  cuotasFijas = {cantidad: 0, estado:false, fecha:new Date()}
  total
  cuotas
  auxCuotas

  constructor(private mainService: MainService) { }

  registrarDeuda() {
    this.mainService.registrarDeuda(this.deuda);
  }

  sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  calcularCuotas() {
    this.deuda.cuotas = []
    if (this.deuda.monto != 0 && this.cuotas != 0 && this.deuda.periodo != "") {
      this.cuotasFijas = {
        estado: false,
        cantidad: parseFloat(this.mainService.getValorCuotasFijas(this.deuda.monto, 0.2, this.cuotas, this.deuda.periodo)),
        fecha: new Date()
      }
      this.total = (this.cuotas * this.cuotasFijas.cantidad).toFixed(0)
      for (let i = 0; i < this.cuotas; i++) {
        if(this.deuda.periodo=="diario"){
          this.cuotasFijas.fecha = this.sumarDias(this.cuotasFijas.fecha, 1)
        }else if(this.deuda.periodo=="semanal"){
          this.cuotasFijas.fecha = this.sumarDias(this.cuotasFijas.fecha, 7)
        }else if(this.deuda.periodo=="quincenal"){
          this.cuotasFijas.fecha = this.sumarDias(this.cuotasFijas.fecha, 15)
        }else if(this.deuda.periodo=="mensual"){
          this.cuotasFijas.fecha = this.sumarDias(this.cuotasFijas.fecha, 30)
        }

        console.log(this.cuotasFijas);
        this.deuda.cuotas.push(this.cuotasFijas)
      }
      this.bandera = true
    } else {
      alert("Rellene todos los campos")
    }
  }

  ngOnInit() {
  }

}

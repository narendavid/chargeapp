import { Component, OnInit } from '@angular/core';
import { MainService } from "../../servicios/main.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  pagos: Observable<any[]>;

  constructor(private mainService: MainService) {
    this.mostrarHoy()
    this.pagos.subscribe((d)=>console.log(d))
  }
  sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  mostrarHoy() {
    let d = new Date()
    this.pagos = this.mainService.getPagos(this.sumarDias(d,-1))
  }

  ngOnInit() {
  }

}

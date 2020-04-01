import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  cliente
  cedula

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {

  }

  login(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

  getClientes() {
    return this.afs.collection("clientes").snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getClienteUnico() {
    return this.afs.collection("clientes", ref => ref.where(firebase.firestore.FieldPath.documentId(), "==", this.cliente)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getDeudasCliente() {
    return this.afs.collection("deudas", ref => ref.where("cliente", "==", this.cliente)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  registrarCliente(c) {
    return this.afs.collection("clientes").add(c)
  }

  registrarDeuda(d) {
    return this.afs.collection("deudas").add(d)
  }

  /*Calcular cuotas de las deudas*/
  getValorCuotasFijas(monto, tasa, cuotas, periodo) {
    if (periodo == "diario") {
      var cuotasAux = cuotas
      if (cuotas % 30 != 0) {
        cuotasAux += (30 - (cuotas % 30))
      }
      return ((monto * (tasa / 30 * cuotasAux) + monto) / cuotas).toFixed(2)
    } else if (periodo == "semanal") {
      var cuotasAux = cuotas
      if (cuotas % 4 != 0) {
        cuotasAux += (4 - (cuotas % 4))
      }
      return ((monto * (tasa / 4 * cuotasAux) + monto) / cuotas).toFixed(2)
    } else if (periodo == "quincenal") {
      var cuotasAux = cuotas
      if (cuotas % 2 != 0) {
        cuotasAux++
      }
      return ((monto * (tasa / 2 * cuotasAux) + monto) / cuotas).toFixed(2)
    } else if (periodo == "mensual") {
      return ((monto * (tasa * cuotas) + monto) / cuotas).toFixed(2)
    }
  }

  getPagos(fecha) {
    return this.afs.collection("deudas", ref => ref.where("cuotas.fecha", "==", fecha)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

}

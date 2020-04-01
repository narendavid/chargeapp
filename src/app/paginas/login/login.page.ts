import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//servicio
import { MainService } from '../../servicios/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email
  pass

  constructor(private mainService: MainService, private router: Router) {

  }

  login() {
    this.mainService.login(this.email, this.pass)
      .then(() => this.router.navigate(['clientes']))
      .catch((err) => alert("Usuario inválido"))
  }

  ngOnInit() {
  }

}

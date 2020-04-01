import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeudaPageRoutingModule } from './registro-deuda-routing.module';

import { RegistroDeudaPage } from './registro-deuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeudaPageRoutingModule
  ],
  declarations: [RegistroDeudaPage]
})
export class RegistroDeudaPageModule {}

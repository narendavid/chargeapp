import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule) },
  { path: 'clientes', loadChildren: () => import('./paginas/clientes/clientes.module').then(m => m.ClientesPageModule) },
  { path: 'deuda', loadChildren: () => import('./paginas/deuda/deuda.module').then(m => m.DeudaPageModule) },
  { path: 'detalle-cliente', loadChildren: () => import('./paginas/detalle-cliente/detalle-cliente.module').then(m => m.DetalleClientePageModule) },
  { path: 'registro-cliente', loadChildren: () => import('./paginas/registro-cliente/registro-cliente.module').then(m => m.RegistroClientePageModule) },
  {
    path: 'registro-deuda',
    loadChildren: () => import('./paginas/registro-deuda/registro-deuda.module').then( m => m.RegistroDeudaPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./paginas/diario/diario.module').then( m => m.DiarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

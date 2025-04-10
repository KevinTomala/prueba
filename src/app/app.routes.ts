import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta predeterminada
  { path: '**', redirectTo: '' }, // Redirige rutas no encontradas a la página principal
];
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [], // Importa RouterModule para standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrige styleUrl a styleUrls
  standalone: true,
})
export class HomeComponent {}
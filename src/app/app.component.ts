import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importe RouterOutlet pour utiliser <router-outlet>
  template: `<router-outlet></router-outlet>`, // Affiche le composant basé sur la route
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

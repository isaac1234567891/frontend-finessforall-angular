import { Component } from '@angular/core';
import { BanerComponent } from '../baner/baner.component';
import { BanerPrincipalComponent } from '../components/baner-principal/baner-principal.component';

@Component({
  selector: 'app-page-routines',
  standalone: true,
  imports: [BanerComponent, BanerPrincipalComponent],
  templateUrl: './page-routines.component.html',
  styleUrl: './page-routines.component.css'
})
export class PageRoutinesComponent {

}

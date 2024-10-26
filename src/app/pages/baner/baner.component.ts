import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-baner',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterComponent],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { SupplementsComponent } from './pages/supplements/supplements.component';
=======
>>>>>>> 27fc829742dc4f5ac99ab4053044a1193b9d1942

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-finessforall-angular';
}

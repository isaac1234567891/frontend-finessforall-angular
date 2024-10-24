import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meals-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals-list.component.html',
  styleUrl: './meals-list.component.css'
})
export class MealsListComponent {
  meals: any[] = [];
  constructor( private mealsService: MealsService){}
  ngOnInit() {
    this.mealsService.getAllMeals().subscribe( (data) => {
      console.log(data);
      this.meals = data.data;
    } )
  }
}

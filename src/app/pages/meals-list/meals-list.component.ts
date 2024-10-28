import { Component } from '@angular/core';
import { MealsService } from '../../service/meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meals-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals-list.component.html',
  styleUrl: './meals-list.component.css',
})
export class MealsListComponent {
  meals: any[] = [];
  constructor(private mealsService: MealsService) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mealsService.getAllMeals().subscribe((data) => {
      console.log(data);
      this.meals = data.data;
    });
  }

  editar(id: any) {
    console.log(`editar receta ${id}`);
  }
  eliminar(id: any) {
    console.log(`eliminar receta ${id}`);
    this.mealsService.deleteMeals(id).subscribe((data) => {
      console.log(data);
      this.loadData();
    });
  }
}

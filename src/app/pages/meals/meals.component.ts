import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MealsService } from "../../service/meals.service";

@Component(
{
selector:'app-recipe',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './meals.component.html',
styleUrl: './meals.component.css'
})

export class MealsComponent {
formData: FormGroup = new FormGroup(
{
name: new FormControl( '', [Validators.required]),
imagen: new FormControl( '', [Validators.required]),
ingredients: new FormControl( '', [Validators.required]),
instructions: new FormControl( '', [Validators.required]),
calories: new FormControl( '', [Validators.required]),
proteins: new FormControl( '', [Validators.required]),
fats: new FormControl('', [Validators.required]),
carbohydrates: new FormControl( '', [Validators.required]),
fiber: new FormControl( '', [Validators.required])
}
)

constructor( private mealsService: MealsService){}

handleSubmit() {
if(this.formData.valid){
console.log(this.formData.value);
this.mealsService.registerMeals(this.formData.value).subscribe( function (data){
console.log(data);
});
this.formData.reset();
}

}
}

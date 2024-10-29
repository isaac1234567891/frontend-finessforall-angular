import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoutineService } from '../../service/routine.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routines-list-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './routines-list-edit.component.html',
  styleUrl: './routines-list-edit.component.css'
})
export class RoutinesListEditComponent {
  formData: FormGroup = new FormGroup(
    {
      urlImage: new FormControl( '', [Validators.required]),
      name: new FormControl( '', [Validators.required]),
      repetitionsStrength: new FormControl( '', [Validators.required]),
      averageSetsStrength: new FormControl( '', [Validators.required]),
      repetitionsEndurance: new FormControl( '', [Validators.required]),
      averageSetsEndurance: new FormControl( '', [Validators.required]),
      repetitionsHypertrophy: new FormControl('', [Validators.required]),
      averageSetstHypertrophy: new FormControl( '', [Validators.required]),
      description: new FormControl( '', [Validators.required]),
      muscleGroup: new FormControl( '', [Validators.required])
    }
    )
    routines: any[] = [];
    constructor( private routineService: RoutineService, private router: Router){}
    ngOnInit() {
      this.routineService.getAllRoutines().subscribe( (data) => {
        console.log(data);
        this.routines = data.data;
      })
    }
    handleSubmit() {
    if(this.formData.valid){
    
    };
    this.formData.reset();
    }
    }
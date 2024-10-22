import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData: FormGroup = new FormGroup({
    name: new FormControl( '', [Validators.required]),
    lastname: new FormControl( '', [Validators.required]),
    age: new FormControl( '', [Validators.required]),
    gender: new FormControl( '', [Validators.required]),
    weight: new FormControl( '', [Validators.required]),
    height: new FormControl( '', [Validators.required]),
    mobile: new FormControl( '', [Validators.required]),
    username: new FormControl( '', [Validators.required, Validators.email]),
    password: new FormControl( '', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
  message: string|undefined;

  constructor( private authService: AuthService) {}

  handleSubmit() {
    if(this.formData.valid){
      console.log(this.formData.value);
      this.authService.registerUser(this.formData.value).subscribe( ( data ) => {
        console.log(data);
        this.message = data;
        setTimeout(() => {
          this.message = '';
        }, 2000);
      });
      this.formData.reset();
    }
  }
}

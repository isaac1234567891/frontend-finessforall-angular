import { Component } from '@angular/core';
import {
FormControl,
FormGroup,
ReactiveFormsModule,
Validators,
} from '@angular/forms';
import { SupplementsService } from '../../service/supplement.service';

@Component({
selector: 'app-supplement',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './supplements.component.html',
styleUrl: './supplements.component.css',
})
export class SupplementsComponent {
formData: FormGroup = new FormGroup({
urlImage: new FormControl('', [Validators.required]),
name: new FormControl('', [Validators.required]),
description: new FormControl('', [Validators.required]),
quantity: new FormControl('', [Validators.required]),
price: new FormControl('', [Validators.required]),
});

constructor(private supplementsService: SupplementsService) {}

handleSubmit() {
if (this.formData.valid) {
console.log(this.formData.value);
this.supplementsService.registerSupplements(this.formData.value).subscribe(
(data) => {
console.log(data);
}
);
this.formData.reset();
}
}
}

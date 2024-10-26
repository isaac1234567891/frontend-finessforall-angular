import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SupplementsService } from '../../service/supplement.service';

@Component({
  selector: 'app-supplements-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplements-list.component.html',
  styleUrl: './supplements-list.component.css'
})
export class SupplementsListComponent {
  suplements: any[] = [];
  constructor( private supplementsService: SupplementsService) {

  }
  ngOnInit() {
    this.supplementsService.getAllSupplements().subscribe( (data) => {
      console.log(data);
      this.suplements = data.data;
    })
  }
}

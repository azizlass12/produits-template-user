import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  evenements: any;
constructor(private service: StoreService,private route:Router){
  this.service.GetEvenements().subscribe((data:any) => {
    this.evenements=data
    console.log("this data",data)
  });
}
details(id: any, i: any) {
  this.route.navigate(['/details/' + id]);
}
}
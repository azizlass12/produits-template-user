import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent {
  produits: any;
constructor(private service: StoreService,private route:Router){
  this.service.GetProduit().subscribe((data:any) => {
    this.produits=data
    console.log("this data",data)
  });
}
details(id: any, i: any) {
  this.route.navigate(['/details/' + id]);
}
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
id: any;
details: any;

constructor(private route:ActivatedRoute,private service:StoreService){
  this.route.params.subscribe(params =>this.id=params['id'])    // id stock dan var id

  this.service.getProductById(this.id).subscribe((Response:any)=> {

    this.details=Response
    console.log('details :' , this.details);

  }

  )
}






}
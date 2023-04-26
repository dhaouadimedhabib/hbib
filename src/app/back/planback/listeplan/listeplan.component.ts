import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/modele/offrePlan/offre.modele';
import { ServicePlanService } from 'src/app/shared/service-plan.service';

@Component({
  selector: 'app-listeplan',
  templateUrl: './listeplan.component.html',
  styleUrls: ['./listeplan.component.css']
})
export class ListeplanComponent implements OnInit {
  offers!: Observable<Offer[]>;
  list:any;
  constructor(private service :ServicePlanService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(
      (res)=>{
       this.list=res;
       console.log(res);
      }
      
          )
  }
  reloadData() {
    this.list = this.service.getOffers();
  }

}

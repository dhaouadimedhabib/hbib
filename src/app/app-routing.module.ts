import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeplanComponent } from './back/planback/listeplan/listeplan.component';

const routes: Routes = [{ path :'listOffers',component: ListeplanComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

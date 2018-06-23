import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PetComponent }         from './pets/pets.component';
import { PetDetailComponent }   from './pet_detail/pet_detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: 'pets', component: PetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymListComponent } from './gym-list/gym-list.component';
import { CreateGymComponent } from './create-gym/create-gym.component';
import { UpdateGymComponent } from './update-gym/update-gym.component';
import { GymdetailsComponent } from './gymdetails/gymdetails.component';

const routes: Routes = [
  {path: 'gyms',component:GymListComponent},
  {path:'create-gym',component:CreateGymComponent},
  {path:'update-gym/:id',component:UpdateGymComponent},
  {path :'' , redirectTo:'gyms',pathMatch:'full'},
  {path :'gym-details/:id' , component:GymdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

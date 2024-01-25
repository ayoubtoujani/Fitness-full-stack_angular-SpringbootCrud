import { Component, OnInit } from '@angular/core';
import { Gym } from '../gym';
import { GymService } from '../gym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrl: './gym-list.component.css'
})
export class GymListComponent implements OnInit {


  gyms: Gym[];



  constructor( private gymService : GymService
    ,private router:Router ) {}

  ngOnInit(): void {
this.getGyms() ; 
  }
private getGyms(){
  this.gymService.getGymList().subscribe(data=>{this.gyms=data;}); 
}

detailsgym(id:number){
  this.router.navigate(['gym-details',id]);
}
updateGym(id:number){
this.router.navigate(['update-gym',id]);
}

deleteGym(id:number)
{
  this.gymService.deleteGym(id).subscribe(data=>{
    console.log(data);
    this.getGyms();
  })
}

}

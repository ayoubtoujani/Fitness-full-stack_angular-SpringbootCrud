import { Component } from '@angular/core';
import { Gym } from '../gym';
import { GymService } from '../gym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gym',
  templateUrl: './create-gym.component.html',
  styleUrl: './create-gym.component.css'
})
export class CreateGymComponent {

  gym:Gym = new Gym();
  constructor(private gymService : GymService,private router : Router){}

  ngOnInit():void{}

  saveGym()
  {this.gymService.createGym(this.gym).subscribe(data =>{
    console.log(data);
    this.goToGymList();
  },error=>console.error(error))}


goToGymList(){
  this.router.navigate(['/gyms']);
}
  onSubmit(){
    console.log(this.gym)
    this.saveGym();
  }
}

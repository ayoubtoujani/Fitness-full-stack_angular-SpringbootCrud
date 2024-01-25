import { Component } from '@angular/core';
import { Gym } from '../gym';
import { ActivatedRoute, Router } from '@angular/router';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-update-gym',
  templateUrl: './update-gym.component.html',
  styleUrl: './update-gym.component.css'
})
export class UpdateGymComponent {
  id:number
  gym:Gym = new Gym();
  constructor(private gymService : GymService,
    private route : ActivatedRoute
    ,private router : Router){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.gymService.getGymById(this.id).subscribe(data=>{this.gym=data;},error=> console.log(error));
  }
  onSubmit(){
    this.gymService.updateGym(this.id,this.gym).subscribe(data=>{
     this.goToGymList() ;
    }
    , error=> console.log(error)) ;
  }
   goToGymList(){
  this.router.navigate(['/gyms']);
}
  

}

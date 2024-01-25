import { Component } from '@angular/core';
import { Gym } from '../gym';
import { ActivatedRoute } from '@angular/router';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-gymdetails',
  templateUrl: './gymdetails.component.html',
  styleUrl: './gymdetails.component.css'
})
export class GymdetailsComponent {


  id :number
  gym:Gym  
  constructor(private route: ActivatedRoute ,private gymservice:GymService){

  }
  ngOnInit():void{
   this.id=this.route.snapshot.params['id'] ;
  this.gym=new Gym();
  this.gymservice.getGymById(this.id).subscribe(data=>{
    this.gym=data;
    
  })
  }
}

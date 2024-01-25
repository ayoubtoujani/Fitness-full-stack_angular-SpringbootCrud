import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from './gym';


@Injectable({
  providedIn: 'root'
})
export class GymService {

  private baseURL="http://localhost:8080/api/v1/gyms";
  constructor(private httpClient : HttpClient) { }

  getGymList(): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(`${this.baseURL}`) ; 
  }

  createGym(gym:Gym):Observable<Object>
  {
    return this.httpClient.post(`http://localhost:8080/api/v1/gyms`,gym) ;
  }

  getGymById(id : number):Observable<Gym>
  {
    return this.httpClient.get<Gym>(`${this.baseURL}/${id}`);
  }

  updateGym(id:number, gym:Gym):Observable<Object>{

    return this.httpClient.put(`${this.baseURL}/${id}`,gym);
  }

  deleteGym(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymListComponent } from './gym-list/gym-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateGymComponent } from './create-gym/create-gym.component';
import { FormsModule } from '@angular/forms';
import { UpdateGymComponent } from './update-gym/update-gym.component';
import { GymdetailsComponent } from './gymdetails/gymdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    GymListComponent,
    CreateGymComponent,
    UpdateGymComponent,
    GymdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

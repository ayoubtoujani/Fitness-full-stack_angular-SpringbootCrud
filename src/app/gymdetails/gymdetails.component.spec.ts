import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymdetailsComponent } from './gymdetails.component';

describe('GymdetailsComponent', () => {
  let component: GymdetailsComponent;
  let fixture: ComponentFixture<GymdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

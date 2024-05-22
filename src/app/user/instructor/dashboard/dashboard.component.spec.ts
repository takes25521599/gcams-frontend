import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: InstructorDashboardComponent;
  let fixture: ComponentFixture<InstructorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

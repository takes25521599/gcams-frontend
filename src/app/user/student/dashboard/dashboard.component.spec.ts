import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

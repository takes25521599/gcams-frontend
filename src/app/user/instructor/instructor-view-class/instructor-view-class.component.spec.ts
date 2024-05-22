import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorViewClassComponent } from './instructor-view-class.component';

describe('InstructorViewClassComponent', () => {
  let component: InstructorViewClassComponent;
  let fixture: ComponentFixture<InstructorViewClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorViewClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorViewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

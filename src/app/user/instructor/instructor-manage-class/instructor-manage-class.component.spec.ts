import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorManageClassComponent } from './instructor-manage-class.component';

describe('InstructorManageClassComponent', () => {
  let component: InstructorManageClassComponent;
  let fixture: ComponentFixture<InstructorManageClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorManageClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorManageClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

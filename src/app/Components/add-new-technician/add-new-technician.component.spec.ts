import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTechnicianComponent } from './add-new-technician.component';

describe('AddNewTechnicianComponent', () => {
  let component: AddNewTechnicianComponent;
  let fixture: ComponentFixture<AddNewTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

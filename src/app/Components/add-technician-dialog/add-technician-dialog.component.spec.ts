import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicianDialogComponent } from './add-technician-dialog.component';

describe('AddTechnicianDialogComponent', () => {
  let component: AddTechnicianDialogComponent;
  let fixture: ComponentFixture<AddTechnicianDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTechnicianDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTechnicianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

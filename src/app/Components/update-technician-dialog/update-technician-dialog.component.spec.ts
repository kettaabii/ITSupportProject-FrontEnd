import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTechnicianDialogComponent } from './update-technician-dialog.component';

describe('UpdateTechnicianDialogComponent', () => {
  let component: UpdateTechnicianDialogComponent;
  let fixture: ComponentFixture<UpdateTechnicianDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTechnicianDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTechnicianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

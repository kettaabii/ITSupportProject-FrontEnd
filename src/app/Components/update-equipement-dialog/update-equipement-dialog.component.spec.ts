import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipementDialogComponent } from './update-equipement-dialog.component';

describe('UpdateEquipementDialogComponent', () => {
  let component: UpdateEquipementDialogComponent;
  let fixture: ComponentFixture<UpdateEquipementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEquipementDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEquipementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

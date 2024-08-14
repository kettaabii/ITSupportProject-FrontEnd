import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEquipementComponent } from './add-new-equipement.component';

describe('AddNewEquipementComponent', () => {
  let component: AddNewEquipementComponent;
  let fixture: ComponentFixture<AddNewEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewEquipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateequipementComponent } from './updateequipement.component';

describe('UpdateequipementComponent', () => {
  let component: UpdateequipementComponent;
  let fixture: ComponentFixture<UpdateequipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateequipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

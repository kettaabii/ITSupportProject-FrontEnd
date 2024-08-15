import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansWrapperComponent } from './technicians-wrapper.component';

describe('TechniciansWrapperComponent', () => {
  let component: TechniciansWrapperComponent;
  let fixture: ComponentFixture<TechniciansWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniciansWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniciansWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

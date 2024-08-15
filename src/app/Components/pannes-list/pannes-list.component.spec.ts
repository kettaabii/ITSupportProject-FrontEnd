import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannesListComponent } from './pannes-list.component';

describe('PannesListComponent', () => {
  let component: PannesListComponent;
  let fixture: ComponentFixture<PannesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PannesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

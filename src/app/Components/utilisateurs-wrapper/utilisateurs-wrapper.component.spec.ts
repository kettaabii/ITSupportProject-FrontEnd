import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursWrapperComponent } from './utilisateurs-wrapper.component';

describe('UtilisateursWrapperComponent', () => {
  let component: UtilisateursWrapperComponent;
  let fixture: ComponentFixture<UtilisateursWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

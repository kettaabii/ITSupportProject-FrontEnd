import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDetailsDialogComponent } from './material-details-dialog.component';

describe('MaterialDetailsDialogComponent', () => {
  let component: MaterialDetailsDialogComponent;
  let fixture: ComponentFixture<MaterialDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

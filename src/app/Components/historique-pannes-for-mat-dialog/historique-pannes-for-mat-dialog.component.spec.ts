import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePannesForMatDialogComponent } from './historique-pannes-for-mat-dialog.component';

describe('HistoriquePannesForMatDialogComponent', () => {
  let component: HistoriquePannesForMatDialogComponent;
  let fixture: ComponentFixture<HistoriquePannesForMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriquePannesForMatDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquePannesForMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

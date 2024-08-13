import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTicketDialogComponent } from './status-ticket-dialog.component';

describe('StatusTicketDialogComponent', () => {
  let component: StatusTicketDialogComponent;
  let fixture: ComponentFixture<StatusTicketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTicketDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

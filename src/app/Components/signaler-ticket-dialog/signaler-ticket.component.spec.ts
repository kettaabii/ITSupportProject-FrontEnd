import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerTicketComponent } from './signaler-ticket.component';

describe('SignalerTicketComponent', () => {
  let component: SignalerTicketComponent;
  let fixture: ComponentFixture<SignalerTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalerTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

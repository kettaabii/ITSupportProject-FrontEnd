import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerEquipementUtilisateurDialogComponent } from './assigner-equipement-utilisateur-dialog.component';

describe('AssignerEquipementUtilisateurDialogComponent', () => {
  let component: AssignerEquipementUtilisateurDialogComponent;
  let fixture: ComponentFixture<AssignerEquipementUtilisateurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignerEquipementUtilisateurDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignerEquipementUtilisateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

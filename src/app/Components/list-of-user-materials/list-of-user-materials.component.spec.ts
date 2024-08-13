import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUserMaterialsComponent } from './list-of-user-materials.component';

describe('ListOfUserMaterialsComponent', () => {
  let component: ListOfUserMaterialsComponent;
  let fixture: ComponentFixture<ListOfUserMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfUserMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfUserMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

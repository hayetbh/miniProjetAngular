import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheUneFormationComponent } from './recherche-une-formation.component';

describe('RechercheUneFormationComponent', () => {
  let component: RechercheUneFormationComponent;
  let fixture: ComponentFixture<RechercheUneFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheUneFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheUneFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

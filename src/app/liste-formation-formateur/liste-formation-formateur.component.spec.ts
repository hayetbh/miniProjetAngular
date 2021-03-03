import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationFormateurComponent } from './liste-formation-formateur.component';

describe('ListeFormationFormateurComponent', () => {
  let component: ListeFormationFormateurComponent;
  let fixture: ComponentFixture<ListeFormationFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormationFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

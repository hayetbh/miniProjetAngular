import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationCandidatComponent } from './liste-formation-candidat.component';

describe('ListeFormationCandidatComponent', () => {
  let component: ListeFormationCandidatComponent;
  let fixture: ComponentFixture<ListeFormationCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormationCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

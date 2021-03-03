import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCndidatInscritComponent } from './liste-des-cndidat-inscrit.component';

describe('ListeDesCndidatInscritComponent', () => {
  let component: ListeDesCndidatInscritComponent;
  let fixture: ComponentFixture<ListeDesCndidatInscritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesCndidatInscritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesCndidatInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFormateurComponent } from './creation-formateur.component';

describe('CreationFormateurComponent', () => {
  let component: CreationFormateurComponent;
  let fixture: ComponentFixture<CreationFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

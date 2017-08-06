import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdrerBodyComponent } from './odrer-body.component';

describe('OdrerBodyComponent', () => {
  let component: OdrerBodyComponent;
  let fixture: ComponentFixture<OdrerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdrerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdrerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

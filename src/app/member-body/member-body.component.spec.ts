import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBodyComponent } from './member-body.component';

describe('MemberBodyComponent', () => {
  let component: MemberBodyComponent;
  let fixture: ComponentFixture<MemberBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

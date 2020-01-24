import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Getdata1Component } from './getdata1.component';

describe('Getdata1Component', () => {
  let component: Getdata1Component;
  let fixture: ComponentFixture<Getdata1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Getdata1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Getdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

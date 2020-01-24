import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdataComponent } from './dynamicdata.component';

describe('DynamicdataComponent', () => {
  let component: DynamicdataComponent;
  let fixture: ComponentFixture<DynamicdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

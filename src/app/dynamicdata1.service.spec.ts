import { TestBed } from '@angular/core/testing';

import { Dynamicdata1Service } from './dynamicdata1.service';

describe('Dynamicdata1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dynamicdata1Service = TestBed.get(Dynamicdata1Service);
    expect(service).toBeTruthy();
  });
});

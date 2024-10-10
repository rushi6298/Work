import { TestBed } from '@angular/core/testing';

import { RaoteguardService } from './raoteguard.service';

describe('RaoteguardService', () => {
  let service: RaoteguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaoteguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

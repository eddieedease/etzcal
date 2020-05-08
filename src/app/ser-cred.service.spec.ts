import { TestBed } from '@angular/core/testing';

import { SerCredService } from './ser-cred.service';

describe('SerCredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerCredService = TestBed.get(SerCredService);
    expect(service).toBeTruthy();
  });
});

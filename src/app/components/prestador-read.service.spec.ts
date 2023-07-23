import { TestBed } from '@angular/core/testing';

import { PrestadorReadService } from './prestador-read.service';

describe('PrestadorReadService', () => {
  let service: PrestadorReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadorReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

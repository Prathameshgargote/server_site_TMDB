import { TestBed } from '@angular/core/testing';

import { MovietabaleService } from './movietabale.service';

describe('MovietabaleService', () => {
  let service: MovietabaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovietabaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

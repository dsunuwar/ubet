import { TestBed } from '@angular/core/testing';

import { NextRaceService } from './next-race.service';

describe('NextRaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextRaceService = TestBed.get(NextRaceService);
    expect(service).toBeTruthy();
  });
});

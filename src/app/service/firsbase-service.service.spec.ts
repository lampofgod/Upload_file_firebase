import { TestBed } from '@angular/core/testing';

import { FirsbaseServiceService } from './firsbase-service.service';

describe('FirsbaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirsbaseServiceService = TestBed.get(FirsbaseServiceService);
    expect(service).toBeTruthy();
  });
});

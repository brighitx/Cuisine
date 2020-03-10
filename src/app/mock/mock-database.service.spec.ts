import { TestBed } from '@angular/core/testing';

import { MockDatabaseService } from './mock-database.service';

describe('MockDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDatabaseService = TestBed.get(MockDatabaseService);
    expect(service).toBeTruthy();
  });
});

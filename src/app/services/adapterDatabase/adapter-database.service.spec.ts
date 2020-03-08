import { TestBed } from '@angular/core/testing';

import { AdapterDatabaseService } from './adapter-database.service';

describe('AdapterDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdapterDatabaseService = TestBed.get(AdapterDatabaseService);
    expect(service).toBeTruthy();
  });
});

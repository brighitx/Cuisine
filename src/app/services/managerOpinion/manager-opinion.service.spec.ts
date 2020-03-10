import { TestBed } from '@angular/core/testing';

import { ManagerOpinionService } from './manager-opinion.service';

describe('ManagerOpinionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerOpinionService = TestBed.get(ManagerOpinionService);
    expect(service).toBeTruthy();
  });
});

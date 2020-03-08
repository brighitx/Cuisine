import { TestBed } from '@angular/core/testing';

import { ManagerRecipeService } from './manager-recipe.service';

describe('ManagerRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerRecipeService = TestBed.get(ManagerRecipeService);
    expect(service).toBeTruthy();
  });
});

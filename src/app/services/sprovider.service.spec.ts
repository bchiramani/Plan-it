import { TestBed } from '@angular/core/testing';

import { SproviderService } from './sprovider.service';

describe('SproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SproviderService = TestBed.get(SproviderService);
    expect(service).toBeTruthy();
  });
});

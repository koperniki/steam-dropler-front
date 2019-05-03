import { TestBed } from '@angular/core/testing';

import { DropConfigService } from './drop-config.service';

describe('DropConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropConfigService = TestBed.get(DropConfigService);
    expect(service).toBeTruthy();
  });
});

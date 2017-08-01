import { TestBed, inject } from '@angular/core/testing';

import { SetupService } from './setup.service';

describe('SetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetupService]
    });
  });

  it('should ...', inject([SetupService], (service: SetupService) => {
    expect(service).toBeTruthy();
  }));
});

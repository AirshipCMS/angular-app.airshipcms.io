import { TestBed, inject } from '@angular/core/testing';

import { AngularTutorialService } from './angular-tutorial.service';

describe('AngularTutorialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTutorialService]
    });
  });

  it('should ...', inject([AngularTutorialService], (service: AngularTutorialService) => {
    expect(service).toBeTruthy();
  }));
});

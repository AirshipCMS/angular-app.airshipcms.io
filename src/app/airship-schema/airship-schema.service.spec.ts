import { TestBed, inject } from '@angular/core/testing';

import { AirshipSchemaService } from './airship-schema.service';

describe('AirshipSchemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirshipSchemaService]
    });
  });

  it('should ...', inject([AirshipSchemaService], (service: AirshipSchemaService) => {
    expect(service).toBeTruthy();
  }));
});

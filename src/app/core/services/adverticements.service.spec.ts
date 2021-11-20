import { TestBed } from '@angular/core/testing';

import { AdverticementsService } from './adverticements.service';

describe('AdverticementsService', () => {
  let service: AdverticementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdverticementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

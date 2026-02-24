import { TestBed } from '@angular/core/testing';

import { SocialApi } from './social-api';

describe('SocialApi', () => {
  let service: SocialApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

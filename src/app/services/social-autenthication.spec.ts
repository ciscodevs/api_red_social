import { TestBed } from '@angular/core/testing';

import { SocialAutenthication } from './social-autenthication';

describe('SocialAutenthication', () => {
  let service: SocialAutenthication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialAutenthication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

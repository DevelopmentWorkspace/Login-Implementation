import { TestBed } from '@angular/core/testing';

import { AuthorisedGuardService } from './authorised-guard.service';

describe('AuthorisedGuardService', () => {
  let service: AuthorisedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorisedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

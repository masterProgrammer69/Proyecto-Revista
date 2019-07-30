import { TestBed } from '@angular/core/testing';

import { UserService } from '../servicios/user.service';

describe('GeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

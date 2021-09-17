import { TestBed } from '@angular/core/testing';

import { GetAllLikesByUserService } from './get-all-likes-by-user.service';

describe('GetAllLikesByUserService', () => {
  let service: GetAllLikesByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLikesByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

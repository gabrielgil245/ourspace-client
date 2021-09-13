import { TestBed } from '@angular/core/testing';

import { GetAllPostsByUserService } from './get-all-posts-by-user.service';

describe('GetAllPostsByUserService', () => {
  let service: GetAllPostsByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPostsByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

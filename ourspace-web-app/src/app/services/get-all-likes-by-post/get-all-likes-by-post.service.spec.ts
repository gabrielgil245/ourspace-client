import { TestBed } from '@angular/core/testing';

import { GetAllLikesByPostService } from './get-all-likes-by-post.service';

describe('GetAllLikesByPostService', () => {
  let service: GetAllLikesByPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLikesByPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

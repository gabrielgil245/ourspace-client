import { TestBed } from '@angular/core/testing';

import { GetAllPostsByPageService } from './get-all-posts-by-page.service';

describe('GetAllPostsByPageService', () => {
  let service: GetAllPostsByPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPostsByPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

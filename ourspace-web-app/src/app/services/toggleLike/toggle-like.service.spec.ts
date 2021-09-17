import { TestBed } from '@angular/core/testing';

import { ToggleLikeService } from './toggle-like.service';

describe('ToggleLikeService', () => {
  let service: ToggleLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

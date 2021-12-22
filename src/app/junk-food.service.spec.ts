import { TestBed } from '@angular/core/testing';

import { JunkFoodService } from './junk-food.service';

describe('JunkFoodService', () => {
  let service: JunkFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunkFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

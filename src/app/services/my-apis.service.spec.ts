import { TestBed } from '@angular/core/testing';

import { MyAPIsService } from './my-apis.service';

describe('MyAPIsService', () => {
  let service: MyAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

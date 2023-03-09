import { TestBed } from '@angular/core/testing';

import { S3ConnectService } from './s3-connect.service';

describe('S3ConnectService', () => {
  let service: S3ConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3ConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

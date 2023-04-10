import { TestBed } from '@angular/core/testing';

import { FaqSettingService } from './faq-setting.service';

describe('FaqSettingService', () => {
  let service: FaqSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

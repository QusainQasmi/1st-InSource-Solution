import { TestBed } from '@angular/core/testing';

import { NotificationSettingService } from './notification-setting.service';

describe('NotificationSettingService', () => {
  let service: NotificationSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

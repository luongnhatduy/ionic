import { TestBed } from '@angular/core/testing';

import { HistoryPurchasedService } from './history-purchased.service';

describe('HistoryPurchasedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryPurchasedService = TestBed.get(HistoryPurchasedService);
    expect(service).toBeTruthy();
  });
});

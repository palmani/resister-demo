import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpModule } from '@angular/http';


describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AppService]
    });
  });

  it('should be inject app.service', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});

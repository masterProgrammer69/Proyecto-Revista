import { TestBed } from '@angular/core/testing';

import { AutorService } from '../servicios/autor.service';

describe('AutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorService = TestBed.get(AutorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CreateSuperheroService } from './create-superhero.service';

describe('CreateSuperheroService', () => {
  let service: CreateSuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

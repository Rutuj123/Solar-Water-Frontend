import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Installations } from './installations';

describe('Installations', () => {
  let component: Installations;
  let fixture: ComponentFixture<Installations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Installations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Installations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

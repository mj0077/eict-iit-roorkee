import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictImageCrousalComponent } from './eict-image-crousal.component';

describe('EictImageCrousalComponent', () => {
  let component: EictImageCrousalComponent;
  let fixture: ComponentFixture<EictImageCrousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictImageCrousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictImageCrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

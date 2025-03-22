import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictComputingImageComponent } from './eict-computing-image.component';

describe('EictComputingImageComponent', () => {
  let component: EictComputingImageComponent;
  let fixture: ComponentFixture<EictComputingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictComputingImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictComputingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictFacilitiesComputingLabComponent } from './eict-facilities-computing-lab.component';

describe('EictFacilitiesComputingLabComponent', () => {
  let component: EictFacilitiesComputingLabComponent;
  let fixture: ComponentFixture<EictFacilitiesComputingLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictFacilitiesComputingLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictFacilitiesComputingLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

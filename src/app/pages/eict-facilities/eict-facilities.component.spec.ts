import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictFacilitiesComponent } from './eict-facilities.component';

describe('EictFacilitiesComponent', () => {
  let component: EictFacilitiesComponent;
  let fixture: ComponentFixture<EictFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictFacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

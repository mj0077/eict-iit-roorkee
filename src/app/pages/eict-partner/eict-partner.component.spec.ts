import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictPartnerComponent } from './eict-partner.component';

describe('EictPartnerComponent', () => {
  let component: EictPartnerComponent;
  let fixture: ComponentFixture<EictPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

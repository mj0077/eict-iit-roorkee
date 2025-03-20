import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictPartnerActivityNodelComponent } from './eict-partner-activity-nodel.component';

describe('EictPartnerActivityNodelComponent', () => {
  let component: EictPartnerActivityNodelComponent;
  let fixture: ComponentFixture<EictPartnerActivityNodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictPartnerActivityNodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictPartnerActivityNodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictFooterComponent } from './eict-footer.component';

describe('EictFooterComponent', () => {
  let component: EictFooterComponent;
  let fixture: ComponentFixture<EictFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

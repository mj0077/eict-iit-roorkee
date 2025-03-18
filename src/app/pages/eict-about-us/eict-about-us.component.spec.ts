import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictAboutUsComponent } from './eict-about-us.component';

describe('EictAboutUsComponent', () => {
  let component: EictAboutUsComponent;
  let fixture: ComponentFixture<EictAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

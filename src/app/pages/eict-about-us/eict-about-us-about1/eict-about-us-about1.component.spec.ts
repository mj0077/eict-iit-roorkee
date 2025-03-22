import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictAboutUsAbout1Component } from './eict-about-us-about1.component';

describe('EictAboutUsAbout1Component', () => {
  let component: EictAboutUsAbout1Component;
  let fixture: ComponentFixture<EictAboutUsAbout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictAboutUsAbout1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictAboutUsAbout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

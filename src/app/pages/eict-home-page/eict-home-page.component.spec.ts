import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictHomePageComponent } from './eict-home-page.component';

describe('EictHomePageComponent', () => {
  let component: EictHomePageComponent;
  let fixture: ComponentFixture<EictHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

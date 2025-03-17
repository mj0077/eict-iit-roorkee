import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EictHeaderComponent } from './eict-header.component';

describe('EictHeaderComponent', () => {
  let component: EictHeaderComponent;
  let fixture: ComponentFixture<EictHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EictHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EictHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

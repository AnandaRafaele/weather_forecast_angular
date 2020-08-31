import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastBalloonsComponent } from './forecast-balloons.component';

describe('ForecastBalloonsComponent', () => {
  let component: ForecastBalloonsComponent;
  let fixture: ComponentFixture<ForecastBalloonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastBalloonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastBalloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

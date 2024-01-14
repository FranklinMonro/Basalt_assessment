import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsByCityComponent } from './trails-by-city.component';

describe('TrailsByCityComponent', () => {
  let component: TrailsByCityComponent;
  let fixture: ComponentFixture<TrailsByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailsByCityComponent]
    });
    fixture = TestBed.createComponent(TrailsByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

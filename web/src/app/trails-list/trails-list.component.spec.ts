import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsListComponent } from './trails-list.component';

describe('TrailsListComponent', () => {
  let component: TrailsListComponent;
  let fixture: ComponentFixture<TrailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailsListComponent]
    });
    fixture = TestBed.createComponent(TrailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

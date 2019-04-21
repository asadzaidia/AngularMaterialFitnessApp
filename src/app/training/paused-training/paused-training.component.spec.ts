import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausedTrainingComponent } from './paused-training.component';

describe('PausedTrainingComponent', () => {
  let component: PausedTrainingComponent;
  let fixture: ComponentFixture<PausedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

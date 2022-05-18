import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningExerciseTimer } from './running-exercise-timer.component';

describe('CurrentTrainingComponent', () => {
  let component: RunningExerciseTimer;
  let fixture: ComponentFixture<RunningExerciseTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningExerciseTimer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningExerciseTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

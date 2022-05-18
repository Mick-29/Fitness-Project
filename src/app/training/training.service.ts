import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  private availableExercises: Exercise[] = [
    {
      id: 'push-ups',
      name: 'Push ups',
      duration: 30,
      calories: 1500,
      state: 'completed',
    },
    {
      id: 'run',
      name: 'Run',
      duration: 60,
      calories: 2000,
      state: 'cancelled',
    },
    {
      id: 'swim',
      name: 'Swim',
      duration: 45,
      calories: 1200,
      state: 'completed',
    },
    {
      id: 'squash',
      name: 'Squash',
      duration: 90,
      calories: 2500,
      state: 'completed',
    },
    {
      id: 'gym',
      name: 'Gym',
      duration: 40,
      calories: 1800,
      state: 'completed',
    },
  ];
  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      (ex) => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }
}

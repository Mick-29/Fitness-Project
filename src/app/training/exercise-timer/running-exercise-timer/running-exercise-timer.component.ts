import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrainingService } from '../../training.service';

@Component({
  selector: 'app-running-exercise-timer',
  templateUrl: './running-exercise-timer.component.html',
  styleUrls: ['./running-exercise-timer.component.css'],
})
export class RunningExerciseTimer implements OnInit {
  @Output() trainingStopEvent = new EventEmitter<void>();
  // @Input() startTimerFromOutside: boolean;

  @Input() startTimerFromParent = false;
  running = false;
  spinnerPause = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
  displaySpinner = false;

  hr: any = '0' + 0;
  min: any = '0' + 0;
  sec: any = '0' + 0;
  ms: any = '0' + 0;

  startTimer: any;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    // if (this.startTimerFromParent === true) {
    //   this.start();
    // }
  }

  onStopTraining() {
    this.trainingStopEvent.emit();
    this.stop();
  }

  start(): void {
    if (!this.running) {
      this.displaySpinner = true;
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }
        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
        if (this.min === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      }, 10);
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    this.displaySpinner = false;
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.min = this.sec = this.ms = '0' + 0;
  }
}

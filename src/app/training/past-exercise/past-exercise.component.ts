import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-exercise',
  templateUrl: './past-exercise.component.html',
  styleUrls: ['./past-exercise.component.css'],
})
export class PastExerciseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'calories', 'duration', 'state'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
  }
}

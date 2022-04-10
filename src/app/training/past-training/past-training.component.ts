import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  // displayedColumns: string[] = ['id', 'name', 'calories', 'duration', 'state'];
  // dataSource = new MatTableDataSource<Exercise>();
  displayedColumns: string[] = ['id', 'name', 'calories', 'duration', 'state'];
  dataSource = EXERCISE_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  // doFilter(filterValue: string) {
  //   // this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}

const EXERCISE_DATA: Exercise[] = [
  { id: 'A123', name: 'push ups', duration: 30, calories: 1500, state: 'completed' },
  { id: 'B234', name: 'running', duration: 60, calories: 2000, state: 'cancelled' },
  { id: 'C345', name: 'swimming', duration: 45, calories: 1200, state: 'completed' },
];

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}

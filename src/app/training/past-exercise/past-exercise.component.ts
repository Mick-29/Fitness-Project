import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-exercise',
  templateUrl: './past-exercise.component.html',
  styleUrls: ['./past-exercise.component.css'],
})
export class PastExerciseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'date',
    'name',
    'calories',
    'duration',
    'state',
  ];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getLatestExercises();
  }

  ngAfterViewInit() {}
}

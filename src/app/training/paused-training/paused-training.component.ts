import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from './../../training.service';
import { Excercise } from './../excersice.model';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-paused-training',
  templateUrl: './paused-training.component.html',
  styleUrls: ['./paused-training.component.css']
})
export class PausedTrainingComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];
  dataSource = new MatTableDataSource<Excercise>();
  unsubscriberDataSource: Subscription;
  constructor(private trainingService: TrainingService) { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {

    this.trainingService.fetchCompletedOrCancelledExcersices();
    this.unsubscriberDataSource = this.trainingService.completedExcersicesChanged.subscribe((excersices: any) => {
      this.dataSource.data = excersices;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.unsubscriberDataSource.unsubscribe();
  }
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

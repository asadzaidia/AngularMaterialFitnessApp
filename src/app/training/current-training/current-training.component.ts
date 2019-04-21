import { TrainingService } from './../../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() StopTraining = new EventEmitter<void>();
  progress = 0;
  timer: any;
  constructor(private dialog: MatDialog, private training: TrainingService) { }

  ngOnInit() {
  this.StartOrResumeTimer();
  }
  StartOrResumeTimer() {
    const step = this.training.getSelectedExcersice().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.training.completeExcersice();
        clearInterval(this.timer);
      }
    }, step);
  }
  stopExcersice() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.StopTraining.emit();
        this.training.cancelExcersice(this.progress);
      } else {
        this.StartOrResumeTimer();
      }
    });
  }

}

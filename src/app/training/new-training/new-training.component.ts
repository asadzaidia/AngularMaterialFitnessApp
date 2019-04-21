import { Subscription } from 'rxjs/Subscription';
import { Excercise } from './../excersice.model';
import { TrainingService } from './../../training.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
@Output() TrainingStarted = new EventEmitter<void>();
unsubscribeExcersices: Subscription;

excersices: Excercise[] = [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.fetchAvailableExcersices();
   this.unsubscribeExcersices = this.trainingService.excercicessChanged.subscribe(excersices => {
      this.excersices = excersices;
    });
  }

  ngOnDestroy() {
    this.unsubscribeExcersices.unsubscribe();
  }
  StartTraining(Form: NgForm) {
    // this.TrainingStarted.emit();
    this.trainingService.startExcersice(Form.value.excersice);
  }

}

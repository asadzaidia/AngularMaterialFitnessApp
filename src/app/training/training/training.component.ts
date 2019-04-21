import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../../training.service';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  onCurrentTraining = false;
  excersiceSubscribed: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excersiceSubscribed = this.trainingService.excerciceChanged.subscribe(ex => {
        if (ex) {
          this.onCurrentTraining = true;
        } else {
          this.onCurrentTraining = false;
        }
    });
  }

  ngOnDestroy() {
    this.excersiceSubscribed.unsubscribe();
  }

}

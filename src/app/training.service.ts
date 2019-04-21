import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { Excercise } from './training/excersice.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TrainingService {
  excerciceChanged = new Subject<Excercise>();
  excercicessChanged = new Subject<Excercise[]>();
  completedExcersicesChanged = new Subject<Excercise[]>();
  private availableExcersice: Excercise[];
  unSubscribeOnLogout: Subscription[] = [];
  private runningExcersice: Excercise;

  constructor(private db: AngularFirestore) {}
  fetchAvailableExcersices() {
  this.unSubscribeOnLogout.push(this
                        .db
                        .collection('availableExcersices')
                        .snapshotChanges()
                        .pipe(map(docArray => {
                          return docArray.map((doc: any) => {
                            return{
                              id: doc.payload.doc.id,
                              name: doc.payload.doc.data().name,
                              duration: doc.payload.doc.data().duration,
                              calories: doc.payload.doc.data().calories
                            };
                          });
                        })).subscribe(excersice => {
                          this.availableExcersice = excersice;
                          this.excercicessChanged.next(this.availableExcersice);
                        }));
  }
  startExcersice(id: string) {
    this.runningExcersice = this.availableExcersice.find( ex => ex.id === id);
    this.excerciceChanged.next(this.runningExcersice);
  }

  completeExcersice() {
    this.addCompletedExcersicesData(
      {
      ...this.runningExcersice,
      date: new Date(),
      state: 'completed'}
    );
    this.runningExcersice = null;
    this.excerciceChanged.next(null);
  }
  cancelExcersice(progress: number) {
    this.addCompletedExcersicesData(
      {
      ...this.runningExcersice,
      duration: this.runningExcersice.duration * ( progress / 100),
      calories: this.runningExcersice.calories * ( progress / 100),
      date: new Date(),
      state: 'canceled'}
    );
    this.runningExcersice = null;
    this.excerciceChanged.next(null);
  }

  getSelectedExcersice() {
    return { ... this.runningExcersice };
  }
 fetchCompletedOrCancelledExcersices() {
  this.unSubscribeOnLogout.push(this.db.collection('finishedExcersices').valueChanges().subscribe((excersices: any) => {
     this.completedExcersicesChanged.next(excersices);
   }));
  }

  private addCompletedExcersicesData(excersice: Excercise) {
    this.db.collection('finishedExcersices').add(excersice);
  }
  cancelSubscription() {
    this.unSubscribeOnLogout.forEach(subs => subs.unsubscribe());
  }
}


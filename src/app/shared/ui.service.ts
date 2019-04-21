import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
@Injectable()
export class UISevice {
  loadingStateChange = new Subject<boolean>();
  constructor(private snackbar: MatSnackBar) {}

  showMessage(err, action, duration) {
    this.snackbar.open(err, action, {
      duration: duration
    });
  }
}

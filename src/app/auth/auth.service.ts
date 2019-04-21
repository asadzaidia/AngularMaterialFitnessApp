import { UISevice } from './../shared/ui.service';
import { auth } from 'firebase/app';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training.service';
import { MatSnackBar } from '@angular/material';



@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

   constructor(private router: Router, private afAuth: AngularFireAuth,
    private trainingService: TrainingService
  , private uiservice: UISevice) {}

    registerUser(authdata: AuthData) {
    this.uiservice.loadingStateChange.next(true);
     this.afAuth.auth.createUserWithEmailAndPassword(
       authdata.email,
       authdata.password
     ).then((result) => {
      this.uiservice.loadingStateChange.next(false);
       this.isSuccess();
     }).catch((err) => {
      this.uiservice.loadingStateChange.next(false);
      this.uiservice.showMessage(err.message, null, 3000);
     });

    }

    loginUser(authdata: AuthData) {
      this.uiservice.loadingStateChange.next(true);
      this.afAuth.auth.signInWithEmailAndPassword(
        authdata.email,
        authdata.password
      ).then((result) => {
        this.uiservice.loadingStateChange.next(false);
        this.isSuccess();
      }).catch((err) => {
        this.uiservice.loadingStateChange.next(false);
        this.uiservice.showMessage(err.message, null, 3000);
      });

    }

    logout() {
      this.afAuth.auth.signOut();
      this.trainingService.cancelSubscription();
      this.authChange.next(false);
      this.router.navigate(['/login']);
      this.isAuthenticated = false;
    }

    isAuth() {
      return this.isAuthenticated;
    }
    isSuccess() {
      this.isAuthenticated = true;
       this.authChange.next(true);
      this.router.navigate(['/training']);
    }
}

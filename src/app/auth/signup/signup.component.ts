import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UISevice } from '../../shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate;
  isLoading = false;
  private isLoadingSubscription: Subscription;
  constructor(private authService: AuthService, private uiservice: UISevice) { }

  ngOnInit() {
    this.isLoadingSubscription = this.uiservice.loadingStateChange.subscribe(loading => {
      this.isLoading = loading;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

  }
  ngOnDestroy() {
    this.isLoadingSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}

import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UISevice } from '../../shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService, private uiservice: UISevice) { }
  isLoading = false;
  private isLoadingSubscription: Subscription;
  ngOnInit() {
    this.isLoadingSubscription = this.uiservice.loadingStateChange.subscribe(loading => {
      this.isLoading = loading;
    });

  }

  ngOnDestroy() {
    this.isLoadingSubscription.unsubscribe();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.loginUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}

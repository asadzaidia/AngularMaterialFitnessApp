import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

   @Output() sideNavbarToggle = new EventEmitter<void>();
   isAuth = false;
   userSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.userSubscription = this.authService.authChange.subscribe(userStatus => {
      this.isAuth = userStatus;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe(); // to clear the memory space
  }
  Logout() {
    this.authService.logout();
  }

  toggleSideNavbar() {
    this.sideNavbarToggle.emit();
  }
}

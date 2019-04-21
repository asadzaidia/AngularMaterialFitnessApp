import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

@Output() closeSideNavBar = new EventEmitter<void>();
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

  closeSideNav() {
    this.closeSideNavBar.emit();
  }

  Logout() {
    this.closeSideNav();
    this.authService.logout();
  }
}

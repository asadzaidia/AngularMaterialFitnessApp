import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuth()) {
      return true;
    }
      this.route.navigate(['/login']);
  }
}

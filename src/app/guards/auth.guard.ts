import { Injectable } from '@angular/core';
import { CanMatch, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch {
  canMatch(
    route: Route,
    segments: UrlSegment[]): MaybeAsync<GuardResult> {
    if( window.localStorage.getItem('isLogged') ) {
      return true
    }
    
    return this._router.navigateByUrl('login');
  }

  constructor(private _router: Router){}
}

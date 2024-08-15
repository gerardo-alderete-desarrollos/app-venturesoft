import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  if( window.localStorage.getItem('isLogged') ) {
    return true
  }
  router.navigateByUrl('login')
  return false;
};




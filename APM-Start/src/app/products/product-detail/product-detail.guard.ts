import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = route.params.id;
    if (id < 1 || isNaN(id)) {
      alert('Invalid Product ID. Please check the ID');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

  constructor(private router: Router) {}
}

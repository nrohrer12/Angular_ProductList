import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
      let id = +next.url[1].path; //e.g router is 'products/10', products is '0', 10 is '1'
      if(isNaN(id) || id < 1) //if id is not a number or if id is less than 1
      {
        alert("Invalid product Id");
        this.router.navigate(['/products']);
        return false;
      };

    return true;
  }
}

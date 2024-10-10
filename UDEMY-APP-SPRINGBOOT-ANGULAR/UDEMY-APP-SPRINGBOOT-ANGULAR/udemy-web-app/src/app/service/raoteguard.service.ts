import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RaoteguardService   implements CanActivate 
{

  constructor( private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
   {
    
    // throw new Error('Method not implemented.');
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
      

    return true;
    this.router.navigate(['home']);
    
    
    
    return false;
  }
}

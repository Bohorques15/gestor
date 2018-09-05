import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AutenticacionGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // si esta logueado retorna verdadero
            return true;
        }
        //Si no esta logueado redireccion a la pagina de login con la url de regreso
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
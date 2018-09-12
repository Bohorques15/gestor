import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutenticacionGuard } from './autenticacion/autenticacion.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    //{ path: 'registro', component: RegistroComponent, canActivate: [AutenticacionGuard] },

    // otra ruta redirecciona a la pagina de inicio
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
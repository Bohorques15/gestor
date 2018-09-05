import { Routes, RouterModule } from '@angular/router';

import { AutenticacionGuard } from './autenticacion/autenticacion.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AutenticacionGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },

    // otra ruta redirecciona a la pagina de inicio
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
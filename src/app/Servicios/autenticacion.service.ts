import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AutenticacionService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { email: username, password: password })
            .pipe(map(user => {
                // logueo satisfactorio si un token jwt en el objeto response
                if (user && user.token) {
                    // almacenar detalles de usuario y token jwt en local storage para mantener al usuario logueado 
                    //mientras la pagina se refresque
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remover usuario del local storage para desloguear al usuario
        localStorage.removeItem('currentUser');
    }
}
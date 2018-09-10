import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Usuario, Noticia } from '../modelos';
import { UsuarioService, NoticiaService } from '../servicios';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: Usuario;
    usuarios: Usuario[] = [];

    constructor(private usuario_servicio: UsuarioService) {
        this.currentUser = JSON.parse(localStorage.getItem('usuario'));
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

    /*deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }*/
}
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Usuario, Noticia } from '../modelos';
import { UsuarioService, NoticiaService } from '../servicios';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: Usuario;
    usuarios: Usuario[] = [];
    noticias: Noticia[] = [];
    categorias: any[] = [];

    constructor(private usuario_servicio: UsuarioService, private noticia_service: NoticiaService) {
        this.currentUser = JSON.parse(localStorage.getItem('usuario'));
    }

    ngOnInit() {
        this.cargar_noticias();
    }

    /*deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }*/

    private cargar_noticias() {
        this.noticia_service.obtenerTodas().pipe(first()).subscribe(noticias => { 
            this.noticias = noticias;
            this.categorias = this.noticias.map(function (noticia) {
                return noticia.clasificacion;
            });
            //this.categorias = this.cargar_categorias(this.categorias);
        });
    }

    /*private cargar_categorias(categorias){
        Array.prototype.unique = function(a){
           return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
        });
        return categorias.unique();
    }*/

    filtrarCategoria(categoria){
        this.noticia_service.obtenerPorCategoria(categoria).pipe(first()).subscribe(noticias => { 
            this.noticias = noticias;
        });
    }


}
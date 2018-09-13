import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";


import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Usuario, Noticia } from '../modelos';
import { UsuarioService, NoticiaService } from '../servicios';

@Component({templateUrl: 'categoria.component.html'})
export class CategoriaComponent implements OnInit, OnDestroy{
    currentUser: Usuario;
    usuarios: Usuario[] = [];
    noticias: Noticia[] = [];
    categoria: string;
    categorias: string[] = [];
    private sub: any;


    constructor(private usuario_servicio: UsuarioService, 
        private noticia_service: NoticiaService, private route: ActivatedRoute, private router: Router) {
        //this.currentUser = JSON.parse(localStorage.getItem('usuario'));
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe( params => { this.categoria = params['nombre']; });
        this.cargar_noticias(this.categoria);
    }


    private cargar_noticias(categoria) {
        this.filtrarCategoria(categoria);
        this.noticia_service.obtenerTodas().pipe(first()).subscribe(noticias => { 

            this.categorias = noticias.map(function (noticia) {
                return noticia.clasificacion;
            });

            let unicos = [ ];

            this.categorias.forEach( it => {
              if (unicos.indexOf(it) == -1)
                 unicos.push(it);
            })

            this.categorias = unicos;

        });
    }

    filtrarCategoria(categoria){
        this.noticia_service.obtenerPorCategoria(categoria).pipe(first()).subscribe(noticias => { 
            this.noticias = noticias;
        });
    }

    filtrarUsuario(user_id){
        this.noticia_service.obtenerPorReportero(user_id).pipe(first()).subscribe(noticias => { 
            this.noticias = noticias;
        });        
    }

    navegar(categoria){
        this.sub.unsubscribe();
        console.log( "ngOnDestroy() called." );
        localStorage.setItem('ruta', JSON.stringify(categoria));
        this.router.navigate(['/categoria',categoria]);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        console.log( "ngOnDestroy() called." );
    }


}
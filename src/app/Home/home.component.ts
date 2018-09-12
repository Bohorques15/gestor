import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Usuario, Noticia } from '../modelos';
import { UsuarioService, NoticiaService } from '../servicios';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: Usuario;
    usuarios: Usuario[] = [];
    noticias: Noticia[] = [];
    categorias: string[] = [];

    constructor(private usuario_servicio: UsuarioService, private noticia_service: NoticiaService) {
        this.currentUser = JSON.parse(localStorage.getItem('usuario'));
    }

    ngOnInit() {
        this.cargar_noticias();
    }

    private cargar_noticias() {
        this.noticia_service.obtenerTodas().pipe(first()).subscribe(noticias => { 

            this.noticias = noticias;

            this.categorias = this.noticias.map(function (noticia) {
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


}
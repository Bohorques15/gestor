import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Noticia } from '../modelos';



@Injectable()
export class NoticiaService {
	constructor(private http: HttpClient) { }

	obtenerTodas() {
        return this.http.get<Noticia[]>(`http://localhost:8000/api/noticias`);
    }

    obtenerPorCategoria(categoria: string) {
        return this.http.get<Noticia[]>(`http://localhost:8000/api/noticias/clasificacion` + categoria);
    }


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Usuario } from '../modelos';


@Injectable()
export class UsuarioService {

	constructor(private http: HttpClient) { }

	obtenerTodos() {
        return this.http.get<Usuario[]>(`http://localhost:8000/api/user`);
    }

    obtenederPorId(id: number) {
        return this.http.get(`http://localhost:8000/api/user` + id);
    }

    registrar(usuario: Usuario) {
        return this.http.post(`http://localhost:8000/api/user/register`, usuario);
    }

    actualizar(usuario: Usuario) {
        return this.http.put(`http://localhost:8000/api/user/` + usuario.id, usuario);
    }

    borrar(id: number) {
        return this.http.delete(`http://localhost:8000/api/user/` + id);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioService {
	constructor(private http: HttpClient) { }
}
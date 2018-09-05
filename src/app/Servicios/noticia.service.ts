import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NoticiaService {
	constructor(private http: HttpClient) { }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UsuarioService } from '../servicios';

@Component({templateUrl: 'registro.component.html'})

export class RegistroComponent implements OnInit{
	registro_formulario: FormGroup;
    cargando = false;
    enviado = false;

	constructor(private constructor_formulario: FormBuilder,private router: Router,private usuario_service: UsuarioService) { }

	ngOnInit() {
        this.registro_formulario = this.constructor_formulario.group({
            name: ['', Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }


    // getter conveniente para facil acceso a los campos del formulario
    get f() { return this.registro_formulario.controls; }

    onSubmit() {
        this.enviado = true;

        // detener si formulario es invalido
        if (this.registro_formulario.invalid) {
            return;
        }

        this.cargando = true;
        this.usuario_service.registrar(this.registro_formulario.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.cargando = false;
                });
    }
	
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AutenticacionService } from '../servicios';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    login_formulario: FormGroup;
    cargando = false;
    enviado = false;
    returnUrl: string;

    constructor(
        private constructor_formulario: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private autenticacion_servicio: AutenticacionService) {}

    ngOnInit() {
        this.login_formulario = this.constructor_formulario.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });

        // resetear el status de logueo
        this.autenticacion_servicio.logout();

        // obtener url de retorno de los parametros de la ruta o por default asigna hacia '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // getter conveniente para facil acceso a los campos del formulario
    get f() { return this.login_formulario.controls; }

    onSubmit() {
        this.enviado = true;

        // detener si formulario es invalido
        if (this.login_formulario.invalid) {
            return;
        }

        this.cargando = true;
        this.autenticacion_servicio.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.cargando = false;
                });
    }
}

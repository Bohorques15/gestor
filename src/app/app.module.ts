import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AutenticacionGuard } from './autenticacion/autenticacion.guard';
import { AutenticacionService, NoticiaService, UsuarioService } from './servicios';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutenticacionGuard, AutenticacionService, UsuarioService, NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

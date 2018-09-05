import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AutenticacionGuard } from './autenticacion/autenticacion.guard';
import { AutenticacionService, NoticiaService, UsuarioService } from './servicios';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AutenticacionGuard, AutenticacionService, UsuarioService, NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

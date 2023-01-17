// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { CursosrealizadosComponent } from './cursosrealizados/cursosrealizados.component';
import { HardySoftSkillsComponent } from './hardy-soft-skills/hardy-soft-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { RedesComponent } from './dashboard1/redes/redes.component';
import { EditarbannerComponent } from './dashboard1/editarbanner/editarbanner.component';
import { SobremimodalComponent } from './dashboard1/sobremimodal/sobremimodal.component';
import { ExperienciamodalComponent } from './dashboard1/experienciamodal/experienciamodal.component';
import { CursosrealizadosmodalComponent } from './dashboard1/cursosrealizadosmodal/cursosrealizadosmodal.component';
import { HardysoftmodalComponent } from './dashboard1/hardysoftmodal/hardysoftmodal.component';
import { ProyectosmodalComponent } from './dashboard1/proyectosmodal/proyectosmodal.component';
// Servicios
import { SobreMiService } from './servicios/sobremi';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    BannerComponent,
    SobremiComponent,
    ExperiencialaboralComponent,
    CursosrealizadosComponent,
    HardySoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    Dashboard1Component,
    RedesComponent,
    EditarbannerComponent,
    SobremimodalComponent,
    ExperienciamodalComponent,
    CursosrealizadosmodalComponent,
    HardysoftmodalComponent,
    ProyectosmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SobreMiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';
@Component({
  selector: 'app-cursosrealizados',
  templateUrl: './cursosrealizados.component.html',
  styleUrls: ['./cursosrealizados.component.css']
})
export class CursosrealizadosComponent implements OnInit {

  encabezadocursos: string = '';
  lista1cursos: string = '';
  lista2cursos: string = '';
  lista3cursos: string = '';
  lista4cursos: string = '';
  imagenescursos1: string = '';
  imagenescursos2: string = '';
  imagenescursos3: string = '';
  titulocursos: string = '';

  constructor(// inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
    console.log(miporfolio);
    // Definir informacion a mostrar
    this.encabezadocursos=miporfolio.encabezadocursos;
    this.lista1cursos=miporfolio.lista1cursos;
    this.lista2cursos=miporfolio.lista2cursos;
    this.lista3cursos=miporfolio.lista3cursos;
    this.lista4cursos=miporfolio.lista4cursos;
    this.imagenescursos1=miporfolio.imagenescursos1;
    this.imagenescursos2=miporfolio.imagenescursos2;
    this.imagenescursos3=miporfolio.imagenescursos3;
    this.titulocursos=miporfolio.titulocursos;

  });
  }

}

import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  imagenproyectos: string = '';
  tituloproyectos: string = '';
  textoproyecto1: string = '';
  textoproyecto2: string = '';
  textoproyecto3: string = '';



  constructor(// inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
    console.log(miporfolio);
    // Definir informacion a mostrar
    this.imagenproyectos=miporfolio.imagenproyectos;
    this.tituloproyectos=miporfolio.tituloproyectos;
    this.textoproyecto1=miporfolio.textoproyecto1;
    this.textoproyecto2=miporfolio.textoproyecto2;
    this.textoproyecto3=miporfolio.textoproyecto3;
  });
  }

}

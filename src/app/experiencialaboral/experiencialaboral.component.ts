import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit{

  tituloexperiencia: string = '';
  descripcionexperiencia: string = '';
  descripcionexperiencia2: string ='';
  experiencias: any;
 
  constructor( // inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
    console.log(miporfolio);
    // Definir informacion a mostrar
    this.tituloexperiencia=miporfolio.tituloexperiencia;
    this.descripcionexperiencia=miporfolio.descripcionexperiencia;
    this.descripcionexperiencia2=miporfolio.descripcionexperiencia2;
    this.experiencias=miporfolio.experiencias;
  });
  }
}



import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

bannerfoto1: string = '';
bannerfoto2: string = '';
bannerfoto3: string = '';

  constructor( // inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
    console.log(miporfolio);
    // Definir informacion a mostrar
    this.bannerfoto1=miporfolio.bannerfoto1
    this.bannerfoto2=miporfolio.bannerfoto2
    this.bannerfoto3=miporfolio.bannerfoto3
  });
}
}

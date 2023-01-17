import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
 // Crear Variables de instancia para almacenar los datos con los que trata el servicio
fotosobremi: string = '';
titulosobremi: string = '';
descripcionsobremi: string = '';
descripcionsobremi2: string = '';
descripcionsobremi3: string = '';
descripcionsobremi4: string = '';
descripcionsobremi5: string = '';
descripcionsobremi6: string = '';

constructor(
  // inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
  console.log(miporfolio);
  // Definir informacion a mostrar
  this.fotosobremi=miporfolio.fotosobremi;
  this.titulosobremi=miporfolio.titulosobremi;
  this.descripcionsobremi=miporfolio.descripcionsobremi;
  this.descripcionsobremi2=miporfolio.descripcionsobremi2;
  this.descripcionsobremi3=miporfolio.descripcionsobremi3;
  this.descripcionsobremi4=miporfolio.descripcionsobremi4;
  this.descripcionsobremi5=miporfolio.descripcionsobremi5;
  this.descripcionsobremi6=miporfolio.descripcionsobremi6;
 });
}
}

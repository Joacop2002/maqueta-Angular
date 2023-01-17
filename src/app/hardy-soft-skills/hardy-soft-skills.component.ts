import { Component, OnInit } from '@angular/core';
import { SobreMiService } from '../servicios/sobremi';

@Component({
  selector: 'app-hardy-soft-skills',
  templateUrl: './hardy-soft-skills.component.html',
  styleUrls: ['./hardy-soft-skills.component.css']
})
export class HardySoftSkillsComponent implements OnInit{

  tituloskills: string = '';
  skills: any;

  constructor( // inyectar el servicio para tener acceso en la clase a los metodos
  private sobremiService: SobreMiService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.sobremiService.getmiporfolio().subscribe(miporfolio =>{
    console.log(miporfolio);
    // Definir informacion a mostrar
    this.tituloskills=miporfolio.tituloskills;
    this.skills=miporfolio.skills
  });
  }
}

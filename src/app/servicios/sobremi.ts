// Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Esto es para suscribirse y que reciba respuesta de forma asincrona
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SobreMiService {
 // El primer http se llama alias
  constructor(private http: HttpClient) { }

  // Metodo observable que devuelve los datos
  getmiporfolio(): Observable<any> {
    // Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner la url para traer datos
    return this.http.get('./assets/json/miporfolio.json')
  }

}

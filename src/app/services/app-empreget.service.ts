import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppEmpregetService {

  constructor(private http: HttpClient) { }

  findAllPrestadorPerfil(codigoObjeto : string) {

   // url que devolverá o conteúdo da api empreget
  let url = 'localhost:8080/prestadores/perfil/' + codigoObjeto;

  //quando eu fizer um get, o conteúdo retornado será um json
    var header = {
      headers : new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
    return this.http.get(url, header).toPromise();
  }
}

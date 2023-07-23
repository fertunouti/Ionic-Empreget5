

import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestadores } from './prestador.model';
import { IonSearchbar } from '@ionic/angular';
import { prestadorByName } from './prestadorByName.model';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

    
private email: string = '';
private termoProcurado = '';
baseUrl = "http://localhost:8080/prestadores"
baseUrlByName = "http://localhost:8080/prestadores/nome-contem/"

 
constructor(private http: HttpClient) { }
 
addEmail(valorEmail:string){
  this.email = valorEmail
  }
readEmail () {
    return this.email
  }

addTermo(valorTermo:string){
  this.termoProcurado = valorTermo
}

readTermo(){
  return this.termoProcurado
}

read(): Observable<Prestadores[]>{
  return this.http.get<Prestadores[]>(this.baseUrl)
}

readByName(): Observable<prestadorByName[]>{
  
  return this.http.get<prestadorByName[]>(this.baseUrlByName+this.termoProcurado )
}


}


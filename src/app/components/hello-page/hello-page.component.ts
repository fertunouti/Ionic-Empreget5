
import { Component, OnInit, Input } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { PrestadorService } from 'src/app/services/prestador.service';
import { prestadorByName } from './../../services/prestadorByName.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss'],
})
export class HelloPageComponent  implements OnInit {

  constructor(private emailLogin:UserService, private prestadorByName:PrestadorService) {}

  emailUserAtual : string ='';
  nomePrestadorProcurado!: any
 
  prestadoresByName!: prestadorByName[]
   
 onMudouTermo(evento:any){
  console.log(evento.novoTermo)
  this.prestadorByName.addTermo(evento.novoTermo)
  this.prestadorByName.readByName().subscribe(prestadores => {
  this.prestadoresByName = prestadores;
      //console.log(prestadores)
  })
 
  
  }
  
  ngOnInit() {
   
    
    // this.emailLogin.emitirEmail.subscribe(  
    //  email => this.emailUserAtual = email
    // )

    this.emailUserAtual = this.emailLogin.readEmail()
    

  }

}

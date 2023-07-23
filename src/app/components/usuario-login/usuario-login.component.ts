

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss'],
})
export class UsuarioLoginComponent  implements OnInit {

logado: boolean = false
// usuario : any ={
//   nome: '',
//   email : '',
//   senha : '',
//   id: null,
//   souCliente: true
// }

 
constructor (private emailLogin:UserService) { }

valorEmail! : string


onAddEmail(email:any){
  console.log (email.value)
  this.valorEmail = email.value
  this.emailLogin.addEmail(email.value)
}

  
ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/services/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {

  usuario!: Usuarios[]

  constructor() { 

   
  }

  ngOnInit() {


   }



}

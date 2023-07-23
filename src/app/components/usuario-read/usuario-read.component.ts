import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuarios } from 'src/app/services/usuarios.model';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.scss'],
})
export class UsuarioReadComponent  implements OnInit {

  usuarios!: Usuarios[]
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.read().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(usuarios)
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() emailUsuario: string =''
  logado: Boolean = false

  constructor() { }


  ngOnInit() {
  }


}

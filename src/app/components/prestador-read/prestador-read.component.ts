import { Component, OnInit } from '@angular/core';
import { Prestadores } from 'src/app/services/prestador.model';
import { PrestadorService } from 'src/app/services/prestador.service';
import { prestadorByName } from './../../services/prestadorByName.model';

@Component({
  selector: 'app-prestador-read',
  templateUrl: './prestador-read.component.html',
  styleUrls: ['./prestador-read.component.scss'],
})
export class PrestadorReadComponent  implements OnInit {

 

    prestadores!: Prestadores[]
    constructor(private prestadorService: PrestadorService) { }
  
    ngOnInit() {
  
      this.prestadorService.read().subscribe(prestadores => {
        this.prestadores = prestadores;
        console.log(prestadores)
      })
    }
  
  }



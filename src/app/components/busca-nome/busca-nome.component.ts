
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { prestadorByName } from 'src/app/services/prestadorByName.model';
import { PrestadorService } from 'src/app/services/prestador.service';
import { IonSearchbar } from '@ionic/angular';


@Component({
  selector: 'app-busca-nome',
  templateUrl: './busca-nome.component.html',
  styleUrls: ['./busca-nome.component.scss'],
})

export class BuscaNomeComponent  implements OnInit {


constructor() { }
//valorInicial: string = "Busque um Nome"  
prestadorByName!: prestadorByName
prestadorService!: PrestadorService

@Output() mudouValor = new EventEmitter()

  termoProcurado:any
  onKeySearch(termo:IonSearchbar){
    //this.prestadorService.addTermo(termoProcurado.value!)
    //console.log(termoProcurado.value!)
    this.termoProcurado = termo.value
    //console.log(this.termoProcurado)
    this.mudouValor.emit({novoTermo:this.termoProcurado})
  }


  ngOnInit() {}

}

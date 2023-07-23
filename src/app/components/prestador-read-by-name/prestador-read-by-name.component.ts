
import { Component, OnInit ,OnChanges,Input} from '@angular/core';
import { prestadorByName } from './../../services/prestadorByName.model';
import { PrestadorService } from 'src/app/services/prestador.service';


@Component({
  selector: 'app-prestador-read-by-name',
  templateUrl: './prestador-read-by-name.component.html',
  styleUrls: ['./prestador-read-by-name.component.scss'],
})

export class PrestadorReadByNameComponent  implements OnInit  {

  
    
    prestadoresByName!: prestadorByName[]
    constructor(private prestadorService: PrestadorService) { }
  
  
    
    ngOnInit() { 
    




    }
  
  }

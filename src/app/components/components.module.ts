
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadComponent } from './load/load.component';
import { TestComponent } from './test/test.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuariosService } from '../services/usuarios.service';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from '../pages/componentes/home/home-routing.module';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';
import { PrestadorReadComponent } from './prestador-read/prestador-read.component';
import { PrestadorReadByNameComponent} from './prestador-read-by-name/prestador-read-by-name.component';
import { BuscaNomeComponent } from './busca-nome/busca-nome.component';


@NgModule({
    declarations: [
      LoadComponent,
      TestComponent,
      UsuarioLoginComponent,
      HelloPageComponent,
      UsuarioReadComponent,
      PrestadorReadComponent,
      PrestadorReadByNameComponent,
      BuscaNomeComponent
      
      
     
     
           
    ],
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      HomePageRoutingModule 
      
    
    ],
    exports: [
        LoadComponent,
        TestComponent,
        UsuarioLoginComponent,
        HelloPageComponent,
        UsuarioReadComponent,
        PrestadorReadComponent,
        PrestadorReadByNameComponent,
        BuscaNomeComponent
       
       
      
    ],
    providers: [UsuariosService]
  })
  export class ComponentsModule { }

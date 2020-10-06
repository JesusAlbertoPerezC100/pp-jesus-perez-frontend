import { Component, OnInit } from '@angular/core';
import { PersonaService} from '../servicio/persona.service'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  agregarPersonaRegistro: any ={ name:'', email:'', phone:'' ,password:'',age:'',gender:'', hobby:''}
  personas: any 
  buscarPersonaRegistro: any = { name:'',hobby:''};
  constructor(private personaService: PersonaService) {
    this.obtenerPersonas();
   }

  obtenerPersonas(){
    this.personaService.obtenerTodasLasPersonas().subscribe( resultado => {
      this.personas = resultado.users;
    }, error =>{console.log(JSON.stringify(error))});
  }
  ngOnInit(): void {
  }

  eliminarPersona(identificador){
    console.log(identificador);
    this.personaService.eliminarPersona(identificador).subscribe( resultado => {
      this.obtenerPersonas();
    }, error =>{console.log(JSON.stringify(error))})
  }

  agregarPersona(){
    console.log('EventoAdd');
     this.personaService.agregarPersona(this.agregarPersonaRegistro).subscribe( resultado => {
      this.obtenerPersonas()
    }
      , error =>{console.log(JSON.stringify(error))} );
      console.log('FIN EventoAdd');
  }
  public iden_nm: string;
  public iden_hob: string;
  buscarPersona(){
    console.log('FindBy');
    this.personaService.buscarPersona(this.iden_nm, this.iden_hob).subscribe( resultado => {
      this.buscarPersonaRegistro = resultado.users;
    }, error =>{console.log(JSON.stringify(error))});
  }
  busquedaAvanzadaPersona(){
    console.log('FindByParam');
    this.personaService.buscarPersona(this.iden_nm, this.iden_hob).subscribe( resultado => {
      this.buscarPersonaRegistro = resultado.users;
    }, error =>{console.log(JSON.stringify(error))});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private HttpClient:HttpClient) { }

  obtenerTodasLasPersonas():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/user/GetData/0/0");

  }
  agregarPersona(persona:any){
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.HttpClient.post("http://localhost:3000/user/Save",json,{ headers:headers});
  }

  eliminarPersona(identificador):Observable<any>{
    return this.HttpClient.delete("http://localhost:3000/user/Delete/name/" + identificador);
  }

  buscarPersona(iden_nm, iden_hob):Observable<any>{
    return this.HttpClient.get("http://localhost:3000/user/GetData/"+ iden_nm +"/" + iden_hob)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Libro } from 'src/interfaces/Libros';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(
    private http:HttpClient
  ) { }
  getProgramacion():Observable<Libro[]>{
    return this.http.get<Libro[]>("https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed")
  }
  getBuscar(){
    return this.http.get<Libro[]>("https://www.etnassoft.com/api/v1/get/?category=cine")
  }
  getById(id:string | null):Promise<Libro[]>{
    return lastValueFrom(this.http.get<Libro[]>("https://www.etnassoft.com/api/v1/get/?id="+id))

  }
}

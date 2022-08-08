import { Component, OnInit, ɵfindLocaleData } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/interfaces/Libros';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  libros:Libro[]=[]
  isLoading:boolean=true

  constructor(
    private librosServices:LibrosService
  ) {
    this.librosServices.getProgramacion()
    .subscribe(
      (data:Libro[])=>{
        console.log(data)
        this.libros=data
        this.isLoading=false
      },error=>{
        console.log(error)
        this.isLoading=true
      }
    )
   }
  
  

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/interfaces/Libros';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  libro:Libro[]=[]
  isLoading:boolean=true
  isError:boolean=false

  constructor(
    private activatedRouter:ActivatedRoute,
    private librosService:LibrosService

  ) {
      const id= this.activatedRouter.snapshot.paramMap.get("id")
      console.log("id", id)
      this.librosService.getById(id)
      .then(
        (data:Libro[])=>{
          this.libro=data
          console.log("data", data)
          this.isError=false
        })
      .catch(error=>{
        console.log(error)
        this.isError=true
      })
      .finally(()=>{
        this.isLoading=false
      })
    }

  ngOnInit(): void {
  }

}

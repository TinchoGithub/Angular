import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup

  constructor(
    private fb:FormBuilder //private fb:FormBuilder = new FormBuilder()
  ) {
    this.myForm=this.fb.group({
      nombre:["", [Validators.required]],
      correo:["", [Validators.required]],
      clave:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      apellido:["",[Validators.required]],
      telefono:[""]

    })
   }
   registrarse(){
     console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLogin:FormGroup

  constructor(
    private fb:FormBuilder
  ) {
    this.myLogin=this.fb.group({
      email:["", [Validators.required]],
      clave:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10) ]]
    })
   }
   login(){
    console.log(this.myLogin.value)
  }

  ngOnInit(): void {
  }

}

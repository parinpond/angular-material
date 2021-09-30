import { Component, OnInit } from '@angular/core';
var _ = require('lodash');
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  userData:any={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  checkLogin(){
    if(!_.isEmpty(this.userData.username)&&!_.isEmpty(this.userData.password)){

    }
  }
}

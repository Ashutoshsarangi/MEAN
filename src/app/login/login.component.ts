import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	title:string = "Login";
	flag:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  register(formName, formValid=''){
    if(formName == "login"){
    	this.flag = false;
    	this.title = "Register a new User"
    }else{
      alert(formValid);
      alert('register Logic');
    }
  }
  login(formName, formValid=''){
    if(formName == "login"){
      alert(formValid);
      if(formValid){
        alert('Login Logic');
      }else{
        alert('please check something went wrong');
      }
    }else{
      this.flag = true;
      this.title = "Login"
    }
  }

}

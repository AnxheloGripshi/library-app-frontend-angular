import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid credentials!'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showLogin(){
    // console.log(this.username);
    if(this.username === "anxhelo" && this.password === 'anxhelo123'|| this.username === 'test' && this.password === 'test123'){
      //Redirect to Welcome page
      this.router.navigate(['welcome',this.username])
    this.invalidLogin =  false
    } else {
      this.invalidLogin = true
    }
  }

}

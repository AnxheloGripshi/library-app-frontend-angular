import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/loginData.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData = new LoginData();
  errorMessage = 'Invalid credentials!'
  invalidLogin = false

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this.authService.authenticate(this.loginData).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['books-list'])
        this.invalidLogin = false      
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../model/loginData.model';
import { OauthService } from '../service/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData = new LoginData();
  errorMessage = 'Invalid credentials!'
  invalidLogin = false

  constructor(private router: Router, private oauthService: OauthService) { }

  ngOnInit() {
  }

  login() {

    this.oauthService.authenticate(this.loginData).subscribe(
      data => {
        console.log(data)
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

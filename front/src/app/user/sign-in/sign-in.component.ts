import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [RegistrationService]
})
export class SignInComponent implements OnInit {

login;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  this.login = {
  username : '',
  password: ''
  };
  }

  onLogin(){
  this.registrationService.loginUser(this.login).subscribe(
  response => {
  console.log(response);
  alert('User ' + this.login.username + ' has been entered')
  },
  error => console.log('error', error)
  );
  }

}

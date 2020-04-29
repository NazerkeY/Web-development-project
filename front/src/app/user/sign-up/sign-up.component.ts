import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [RegistrationService]
})
export class SignUpComponent implements OnInit {

register;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  this.register = {
  username : '',
  password: '',
  email: ''
  };
  }

  registerUser(){
  this.registrationService.registerUser(this.register).subscribe(
  response => {
  alert('User ' + this.register.username + ' has been created!')
  },
  error => console.log('error', error)
  );
  }

}

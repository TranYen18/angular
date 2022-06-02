import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: IUser = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
  }
  onSignUp() {
    this.authService.signUp(this.user).subscribe(() => {
      setTimeout(() => {
        this.notification.success('Success','')
        this.routes.navigate(['signin']);
      }, 2000)
    });
  }
}

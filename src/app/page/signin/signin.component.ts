import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: IUser = {
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
  }
  onSignIn() {
    this.authService.signIn(this.user).subscribe(res => {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['']);
      }, 2000)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  user: IUser = {
    name: '',
    email: '',
    password: '',
    position: '',
    about: '',
    cv: '',
    img: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    
  }
  async uploadImg(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "angular";
    const file = event.target.files[0];
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                  "Content-Type": "application/form-data",
              },
          });
    this.user.img = response.data.url;
    
  }
  async uploadCV(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "angular";
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
                "Content-Type": "application/form-data",
            },
        });
  this.user.cv = response.data.url;
    
  }
  onSignUp() {
    this.authService.signUp(this.user).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['signin']);
      }, 2000)
    });
  }
}

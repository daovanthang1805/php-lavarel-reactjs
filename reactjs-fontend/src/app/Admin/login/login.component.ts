import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ApiService } from 'src/app/services/api.service';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: any;
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router, private api: ApiService, private FormBuilder: FormBuilder, private http: HttpClient) { }

  

  ngOnInit(): void {
    this.submitForm();
  }
  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        this.router.navigate(['/admin']);
        
      });
  }
  // submitForm(){
  //   this.http.post('http://localhost/laravel_api/public/api/login', this.form.getRawValue())
  //   .subscribe((res: any)=>{
  //     AuthInterceptor.accesstoken=res.token;
  //     this.router.navigateByUrl("/admin");
  //   })
  // }
}

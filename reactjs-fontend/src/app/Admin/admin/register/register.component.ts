import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any;
  constructor(
    private apiService: ApiService, 
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  add(username:string, useremail:string, userpassword:string, passwordconfirm:string){
    this.users = {
      'name': username,
      'email': useremail,
      'password': userpassword,
      'password_confirmation': passwordconfirm,

      
    };
    this.apiService.register(this.users as any).subscribe(Response=>{
      console.log(this.users);
      this.router.navigateByUrl("/useradmin");
    });
    
    
  }

}

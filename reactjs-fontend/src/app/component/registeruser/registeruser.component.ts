import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

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

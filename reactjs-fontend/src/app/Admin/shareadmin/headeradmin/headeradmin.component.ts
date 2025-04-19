import { Component, InjectionToken, NgProbeToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { TokenType } from '@angular/compiler';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {

  // users:any[]=[];
  user: any=localStorage.getItem('user')

  constructor(private router: Router, private http:HttpClient, private api: ApiService, private auth: AuthService) { }
  currentUser: any;
  // message='';

  ngOnInit(): void {
    // this.http.get('http://localhost/laravel_api/public/api/user')
    // .subscribe((res)=>{
    //   this.message='hi {{res.name}}'
    // })

    // this.getuser();
  }

  // getuser(){
  //   this.api.listuser()
  //   .subscribe((data: any) => {
  //     console.log('dayy', data.name)
  //     this.users=data.name

  //   });
  // }



  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}

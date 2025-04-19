import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {

  constructor(private user:ApiService,private router: Router) { }

  users: any;

  ngOnInit(): void {
    this.showUser();
  }
  showUser(){
    this.users= this.user.listuser().subscribe(user=>{
      this.users=user;
      console.log(this.users);
    });
  }
  deleteUser(id:any){
    this.user.deleteUser(id).subscribe(
      res=>{
        this.users= this.users.filter((a:any) => a.id==id);
        this.showUser();
      }
    );
    this.router.navigateByUrl("/useradmin");
  }

}

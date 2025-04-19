import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showuser();
  }

  showuser(){
    this.users= this.api.listuser().subscribe(user=>{
      this.users=user;
      console.log(this.users);
    });
  }

}

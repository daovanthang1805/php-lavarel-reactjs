import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrademarkService } from 'src/app/services/trademark.service';

@Component({
  selector: 'app-edit-trademark',
  templateUrl: './edit-trademark.component.html',
  styleUrls: ['./edit-trademark.component.css']
})
export class EditTrademarkComponent implements OnInit {

  T_ID: any;
  trademark:any;
  constructor(private route: ActivatedRoute, private router: Router, private Trademark:TrademarkService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.T_ID = Number(routeParams.get('T_ID'));
    console.log(this.T_ID);
    this.Trademark.find(this.T_ID).subscribe((data:any)=>{
      this.trademark = data;
      console.log(this.trademark);
    })
  }
  update(Trademarkname:string, Trademarkdesc:string){
    if(confirm("Bạn có chắc muốn sửa không ?")){
      this.Trademark.update(this.T_ID, this.trademark).subscribe((res)=>{
        this.router.navigateByUrl('/trademarkadmin');
      })
    }
  }

}

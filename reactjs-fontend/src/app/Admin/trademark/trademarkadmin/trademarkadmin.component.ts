import { Component, OnInit } from '@angular/core';
import { TrademarkService } from 'src/app/services/trademark.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trademarkadmin',
  templateUrl: './trademarkadmin.component.html',
  styleUrls: ['./trademarkadmin.component.css']
})
export class TrademarkadminComponent implements OnInit {

  trademarks: any;

  constructor(private trademark:TrademarkService,private router: Router) { }


  ngOnInit(): void {
    this.showTrademark();
  }

  showTrademark(){
    this.trademarks= this.trademark.listtrademark().subscribe(trademark=>{
      this.trademarks=trademark;
      console.log(this.trademarks);
    });
  }

  deleteTrademark(id:any){
    if(confirm("Bạn có chắc muốn xóa không ?")){
      this.trademark.deleteTrademark(id).subscribe(
        res=>{
          this.trademarks= this.trademarks.filter((a:any) => a.T_ID==id);
          this.showTrademark();
        }
      );
      this.router.navigateByUrl("/trademarkadmin");
    }
  }

}

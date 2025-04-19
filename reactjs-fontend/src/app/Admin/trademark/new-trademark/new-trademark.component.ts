import { Component, OnInit } from '@angular/core';
import { TrademarkService } from 'src/app/services/trademark.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-trademark',
  templateUrl: './new-trademark.component.html',
  styleUrls: ['./new-trademark.component.css']
})
export class NewTrademarkComponent implements OnInit {

  trademarks: any;
  constructor(private Trademark: TrademarkService, private router: Router) { }

  ngOnInit(): void {
  }

  add(Trademarkname:string, Trademarkdesc:string){
    this.trademarks = {
      'T_Name': Trademarkname,
      'T_desc': Trademarkdesc
    };
    this.Trademark.addTrademark(this.trademarks as any).subscribe(trademark=>{
      this.trademarks=trademark
    });
    console.log(this.trademarks);
    this.router.navigateByUrl("/trademarkadmin");
  }

}

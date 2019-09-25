import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  constructor(private svc:BankService) { }

  ngOnInit() {
  }
fundTransfer(value:any){
  this.svc.fundTransfer(value)

}
}

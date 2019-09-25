import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private svc:BankService) { }

  ngOnInit() {
  }
  withdraw(value:any){
  
    this.svc.withdraw(value)
  }

}

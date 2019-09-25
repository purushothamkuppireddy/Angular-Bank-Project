import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private svc:BankService) { }

  ngOnInit() {
  }
  deposit(value:any){
    // this.svc.dAmt = value.DAmt
    this.svc.deposit(value)
  }
}

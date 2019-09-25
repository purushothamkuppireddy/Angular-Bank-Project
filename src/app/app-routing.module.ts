import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"transaction",component:TransactionComponent},
  {path:"withdraw",component:WithdrawComponent},
  {path:"deposit",component:DepositComponent},
  {path:"fundTransfer",component:FundTransferComponent},
  {path:"showBalance",component:ShowBalanceComponent},
  // {path:"navbar",component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private svc: BankService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      accountNo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert(JSON.stringify(this.registerForm.value))
    this.svc.login(this.registerForm.value)
    

  }



  //   constructor(private router:Router) { }
  // accountNumber:string
  // password:string
  //   ngOnInit() {
  //   }
  // loginFun(){
  //   alert(this.accountNumber+' is logged in successfully');
  // this.router.navigate(['/transaction'])
  // }

  // login(value:any){
  //   alert(value.account+ ' is logged in successfully');
  //   this.router.navigate(['/transaction'])
  // }
}

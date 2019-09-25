import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BankService } from '../bank.service';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  registerForm=new FormGroup({

// accountNo:new FormControl('',Validators.required),
firstName:new FormControl('',Validators.required),
lastName:new FormControl('',Validators.required),
emailId:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(6)]),
aadharNo:new FormControl('',[Validators.required,Validators.minLength(12),Validators.pattern('[0-9]*')]),
pancardNo:new FormControl('',Validators.required),
address:new FormControl('',Validators.required),
mobileNo:new FormControl('',Validators.required),
balance:new FormControl('',Validators.required)})

  constructor(private svc:BankService,private http: HttpClient) { }

  ngOnInit() {
  }
// firstName:string;
// lastName: string;
// mobileNumber:string;
// aadharNumber: string;
// email:string;
// address: string;
// registrationDetails(){

//   alert('successfully register'+" "+ this.firstName +" "+this.lastName );
// }

register(){
  
  alert(JSON.stringify(this.registerForm.value))
this.svc.register(this.registerForm.value);

}
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BankService {
  private statusSource =  new BehaviorSubject<boolean>(true);
  currentSatus=this.statusSource.asObservable()
  changeStatus(logStatus:boolean){
    this.statusSource.next(logStatus)
  }
  private baseUrl: string = "http://localhost:7620";
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers }


  

 
 toAccountName:string
  i:number
  constructor(private router: Router,private http: HttpClient) { }

  register(value: any) {
    console.log(value);
    this.http.post(this.baseUrl + '/register', JSON.stringify(value), this.options).subscribe(
      (response) => {
      alert("Registration Successfull!!!!! \n Your account no is "+response);
    },

    (error) => { 
      alert("Something went wrong!!!!!!  Plz register again");
   });


  }
  login(value:any) {
    console.log(value)
    this.http.post(this.baseUrl + '/login', JSON.stringify(value), this.options).subscribe(
      (response) => {
        if(response!=0){
        alert("successfully logged-in with account number: "+response)
        this.router.navigate(['/transaction'])}
        else{
          alert("Wrong Credentials")
        this.router.navigate(['/login'])
        }
      },
      (error)=>{
        alert("Wrong Credentials")
        this.router.navigate(['/login'])
     });
  }

  withdraw(value:any) {

    this.http.put(this.baseUrl + '/withdraw', value.WAmt, this.options).subscribe(
      (response) => {
        if(response!=0){
        alert("remainging amount is "+response)
        this.router.navigate(['/transaction'])}
        else{
          alert("Amount is insufficient!  plz deposit")
        this.router.navigate(['/transaction'])
        }
      }
    );
  }

  deposit(value:any) {
    console.log(value);
    this.http.put(this.baseUrl + '/deposit', value.DAmt, this.options).subscribe(
      (response) => {
        if(response!=0){
        alert("Deposited succesfully \n and remaining amount is "+response)
        this.router.navigate(['/transaction'])}
        else{
          alert("error in depositing! plz try again ")
        this.router.navigate(['/transaction'])
        }
      }
    );
  }
    fundTransfer(value:any) 
    {
      console.log(value);
       this.http.put(this.baseUrl + '/fundtransfer', value, this.options).subscribe(
        (response) => {
          if(response!=0){
          alert("Successfully transfered with transaction Id: "+response)
          this.router.navigate(['/transaction'])}
          else{
            alert("Error in transferring! plz try again ")
          this.router.navigate(['/transaction'])
          } 
          (error)=>{
            alert("Account Number does not exist")
            this.router.navigate(['/transaction'])
         }

  });
}

showBalance(){

    this.http.get(this.baseUrl + '/showbalance', this.options).subscribe(
      (response) => {
        if(response!=0){
        alert("Available Balance: "+response)
        this.router.navigate(['/transaction'])}
      });
    }
  }

   

  

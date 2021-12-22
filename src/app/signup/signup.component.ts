import { Component, HostBinding, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterStateSnapshot } from '@angular/router';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform=new FormGroup({
      name : new FormControl,
      email : new FormControl,
      password : new FormControl
  });
  z_index:any | undefined;
  login_data :any | undefined;

  constructor(private signup_ser:SignupService,private router:Router) { }

  ngOnInit(): void {
    this.z_index=3;
    
  }

  submitData(){
    const jquery= {
      name :this.signupform.value.name,
      email : this.signupform.value.email,
      password : this.signupform.value.password
    }
     this.signup_ser.callingData(jquery).subscribe((data)=>{
   alert("registered succcessfully");
       this.signupform.reset();
     });

  }

  LoginUser(){

    const jquery= {
      name :this.signupform.value.name,
      email : this.signupform.value.email,
      password : this.signupform.value.password
    }


  this.signup_ser.loginData().subscribe((data)=>{
    this.login_data=data;
   

for (let i = 0; i < this.login_data.length; i++) {

if(this.login_data[i].email==jquery.email && this.login_data[i].password==jquery.password && this.login_data[i].name==jquery.name ){

  alert("Login successfull");
  localStorage.setItem("datas",this.login_data[i].name);

  this.signupform.reset();
  this.router.navigate(['/home']);


}
  
  
}



  })

  }

  change_z_index(){

    this.z_index=-1;
     }

changeIndex(){
    this.z_index=3;
     }

}

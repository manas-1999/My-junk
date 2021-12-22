import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
public array : any = [];
  constructor() { }

  ngOnInit(): void {
  
    
  }

  success(){
    alert("data submitted successfully");
  }

}

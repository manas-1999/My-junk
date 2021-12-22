import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  condition:any | undefined;
  txt_color:any | undefined;
  array:any | undefined;
  myname="Manas sharma";
  constructor() { }
  
  css='box color one flex'
  ngOnInit(): void {
    this.condition='flex';
    this.txt_color='blu';

    

    this.array=["Raman","raju","rajeev","Shettal","brijwasi","Gopal"]

  }

  Hide(){
    this.condition='flexy';
    
  }

  show(){
    this.condition='flex';
  }

}

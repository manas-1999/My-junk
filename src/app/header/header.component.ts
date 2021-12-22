import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public total_item : any = 0;

  logged : any | undefined;
  user_res : any | undefined;
  user_name : any | undefined;

  constructor(private CartSer:CartService) { }

  ngOnInit(): void {
    this.CartSer.getProducts().subscribe((res)=>{
      this.total_item = res.length;
      
      if(localStorage.length == 0){
      this.logged=false;

      }

      else{
        this.logged = true;
        alert("welcome back" +" " + localStorage.getItem("datas"));
        this.user_name = localStorage.getItem("datas");

      }

      
    })

    


  }

  logout(){
    this.user_res=confirm("Do you really want to logout!");
    console.log(this.user_res);
    if(this.user_res==true){
   this.logged=false;   
    }

    localStorage.clear();
  }

}

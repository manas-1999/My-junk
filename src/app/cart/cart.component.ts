import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product :any =[];
  public grand_total:number=0;

  constructor(private cartser:CartService) { }

  ngOnInit(): void {
    this.cartser.getProducts().subscribe((res)=>{

      this.product=res;
      //  if(this.product.length != 0){
      //    console.log(res);
      //    console.log(this.product);
      //  for (let i = 0; i < res.length; i++) {
      //   // console.log(res[i].id);
      //   // console.log(this.product[i].id);

  
      //   // console.log( this.product[0].quantity);

      //     if(res[i].id == this.product[i].id){
      //       console.log(res[i].id);
      //       console.log(this.product[i].id);
      //           this.product[i].quantity= this.product[i].quantity+1;
      //           this.product[i].total= this.product[i].total * this.product[i].quantity;      
      //    }
         
      //  }
      // }
      
      // else{
      
      //   console.log("Else calls");
          
      //    }



      
     
      this.grand_total= this.cartser.getTotalPrice();

      
      
    })
  }

  removeItem(item:any){
  this.cartser.removeCartItem(item);
  }

  emptycart(){
    this.cartser.removeAllCart();
  }

}

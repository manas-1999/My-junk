import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { JunkFoodService } from 'src/app/junk-food.service';


@Component({
  selector: 'app-junkfood',
  templateUrl: './junkfood.component.html',
  styleUrls: ['./junkfood.component.css']
})
export class JunkfoodComponent implements OnInit {

  user_array: any | undefined;
  product_array : any | undefined;
  res :any | undefined;
  a :any | undefined;
  searchKey:string ='';
  public searchterm:string ="";
  constructor(private junk_fod:JunkFoodService,private cartser:CartService) { }

  ngOnInit(): void {
    this.junk_fod.getAllCards().subscribe((data)=>{
      this.user_array=data;
     

      this.junk_fod.getAllProducts().subscribe((info)=>{
     this.product_array=info;
    
     

     this.product_array.forEach((a:any) => {
       Object.assign(a,{quantity:1,total:a.price});
     });
      })
    });
  }

search(event :any){

  this.searchterm=(event.target as HTMLInputElement).value;
  // console.log(this.searchterm);
  this.searchKey=this.searchterm;
  console.log(this.searchKey);

}

  addtocart(item : any){

    this.cartser.addtoCart(item);
  //   this.res=this.cartser.getProducts();

  //   if(this.res.source.value.length === 0){
  
  //   alert("Item added successfully");
  //   }


 


  //   else{
      

  //  this.res=this.cartser.getProducts();
     
    
  //     for (let i = 0; i < this.res.source.value.length; i++) {
       
  //       console.log("he");
  //       if(this.res.source.value[i].id==item.id){
  //         console.log(this.res.source.value[i].id);
  //         console.log(item.id)
          
  //         // this.a= this.product_array;
  //         // Object.assign(this.a[i],{quantity:this.a[i].quantity+1});
  //         // console.log(this.a[i].quantity);

          
    
  //           this.a=this.product_array;
  //           Object.assign(this.a[i],{quantity:this.a[i].quantity+1});
  //           Object.assign(this.a[i],{total:this.a[i].quantity*this.a[i].price})
  //           console.log(this.product_array[i])
        
        
  //       }
      
      
  //     }

  //     this.cartser.addtoCart(item);



      

      
  
  //   }
 
   }

}

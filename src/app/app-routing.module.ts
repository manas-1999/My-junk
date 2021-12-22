import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExplorefoodComponent } from './explorefood/explorefood.component';
import { JunkfoodComponent } from './explorefood/junkfood/junkfood.component';
import { StarterComponent } from './explorefood/starter/starter.component';
import { VegetarianComponent } from './explorefood/vegetarian/vegetarian.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"test", component:TestComponent},
  {path:"signup",component:SignupComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'contact',component:ContactUsComponent},
  {path:'cart',component:CartComponent},

  
  
  {
    path:'explore',
  


    children:[
      {
      path:'junkfood',
      component:JunkfoodComponent,
     },
     {
       path:'vegetarian',
       component:VegetarianComponent
     },
    {
      path:'starter',
      component:StarterComponent
    },
    
    ]
  },
  {path:"**",component:PagenotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { CounterComponent } from './home/counter/counter.component';
import { AboutComponent } from './home/about/about.component';
import { StoryComponent } from './home/story/story.component';
import { ExploreFoodComponent } from './home/explore-food/explore-food.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReadmoreComponent } from './about-us/readmore/readmore.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExplorefoodComponent } from './explorefood/explorefood.component';
import { StarterComponent } from './explorefood/starter/starter.component';
import { JunkfoodComponent } from './explorefood/junkfood/junkfood.component';
import { VegetarianComponent } from './explorefood/vegetarian/vegetarian.component';
import { JunkFoodService } from './junk-food.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainHomeComponent,
    CounterComponent,
    AboutComponent,
    StoryComponent,
    ExploreFoodComponent,
    TestimonialsComponent,
    AboutUsComponent,
    PagenotfoundComponent,
    ReadmoreComponent,
    ContactUsComponent,
    ExplorefoodComponent,
    StarterComponent,
    JunkfoodComponent,
    VegetarianComponent,
    SignupComponent,
    TestComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JunkFoodService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

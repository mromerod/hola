import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostComponent } from './post/post.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginAuthComponent } from './login-auth/login-auth.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

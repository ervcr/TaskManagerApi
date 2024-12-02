import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';  // Import RegisterComponent
import { LoginComponent } from './login/login.component';  // Import LoginComponent

@NgModule({
  declarations: [AppComponent],  // No need to declare RegisterComponent here
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterComponent,   // Import standalone components here
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

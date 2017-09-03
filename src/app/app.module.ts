import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material imports
import {
  MdCardModule,
  MdTabsModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
} from '@angular/material';

// Self imports
import reducers from './reducers';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthService } from './shared/auth.service';
import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
  imports: [

    // Angular modules
    FormsModule,
    BrowserModule,
    
    // Self modules
    UserModule,
    TasksModule,
    AppRoutingModule,

    // Store
    StoreModule.forRoot(reducers),
    
    // Material modules
    MdCardModule,
    MdTabsModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    BrowserAnimationsModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],

  bootstrap: [ AppComponent ],

  providers: [
    AuthService,
    AuthGuardService,
  ],
})
export class AppModule { }
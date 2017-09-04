import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthService } from './shared/auth.service';
import { AppComponent } from './app.component';
import { tasksReducer } from './tasks/tasks.reducer';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardService } from './shared/auth-guard.service';
import { reducers, storeInitState, metaReducers } from './reducers';

@NgModule({
  exports: [
    FormsModule,
    MdInputModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  imports: [

    // Angular modules
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    
    // Self modules
    UserModule,
    TasksModule,
    AppRoutingModule,

    // Store
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: storeInitState,
    }),
    
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
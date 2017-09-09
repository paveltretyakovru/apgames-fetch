import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material imports
import {
  MdCardModule,
  MdTabsModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdSnackBarModule,
  MdProgressBarModule,
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
import { NotFoundComponent } from './not-found/not-found.component';
import { reducers, storeInitState, metaReducers } from './reducers';

@NgModule({
  exports: [
    FormsModule,
    MdInputModule,
    BrowserModule,
    MdProgressBarModule,
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
    MdSnackBarModule,
    MdProgressBarModule,
    BrowserAnimationsModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
  ],

  bootstrap: [ AppComponent ],

  providers: [
    AuthService,
    AuthGuardService,
  ],
})
export class AppModule { }
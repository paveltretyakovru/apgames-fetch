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

// Modules
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { AppRoutingModule } from "./app-routing.module";

// Reducers
import { tasksReducer } from './tasks/tasks.reducer';
import { reducers, storeInitState, metaReducers } from './reducers';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RequestBarComponent } from './shared/request-bar.component';

// Services
import { AuthService } from './shared/auth.service';
import { PluginsService } from './shared/plugins.service';
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
  exports: [
    FormsModule,
    MdInputModule,
    BrowserModule,
    MdSnackBarModule,
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
    RequestBarComponent,
  ],

  bootstrap: [ AppComponent ],

  providers: [
    AuthService,
    PluginsService,
    AuthGuardService,
  ],
})
export class AppModule { }
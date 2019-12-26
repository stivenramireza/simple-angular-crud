import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ConnectionService } from './services/connection.service';
import { ListComponent } from './components/list/list.component';
import { ListAddComponent } from './components/list-add/list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IDatabase } from './interfaces/database-i';
import { AdapterDatabaseService } from './services/adapterDatabase/adapter-database.service';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    AngularFireAuthModule,
    YoutubeVideoPlayer,
    AngularFireStorageModule,
    ImagePicker,
    File,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}},
    { provide: IDatabase , useClass: AdapterDatabaseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

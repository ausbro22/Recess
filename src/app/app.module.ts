// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//services
// import { DataService } from './services/data.service';

// Componets
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { QueueComponent } from './components/queue/queue.component';
import { FrontComponent } from './components/front/front.component';
import { PlaygroundComponent } from './components/playground/playground.component'
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';
;

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'start', component:StartComponent},
  {path: 'front', component:FrontComponent},
  {path: 'playground', component:PlaygroundComponent},
  {path: 'game', component:GameComponent},
  {path: 'player', component:PlayerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StartComponent,
    QueueComponent,
    FrontComponent,
    PlaygroundComponent,
    GameComponent,
    PlayerComponent,
    ProfileComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  message:String;
  player:Players[];

  constructor(private playerService:PlayerDataService) {
    console.log("constructor ran");
  }

  ngOnInit() {
    this.message = "Let's get started: ";

    // this.playerService.addPlayerToDB();
  }

  AddPlayer() {
  
    this.message = "Player Entered";
  }

}

interface Players{
  Name:string,
  Club:string,
  Country:string
}

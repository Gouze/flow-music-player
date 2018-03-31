import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
isPlayingSong = false;
buttonPlayPause = 'Play';
currentPlaylist = ['../../../assets/musics/01.mp3','../../../assets/musics/02.mp3','../../../assets/musics/03.mp3'];
currentPlaylistPosition = 0;


currentSong = new Audio(this.currentPlaylist[this.currentPlaylistPosition]);







  playPause(){
    if (!this.isPlayingSong){
      this.currentSong.play();
      this.isPlayingSong = true;
      this.buttonPlayPause = 'Pause';
      let currentSongPlaylistContinue = this.currentSong;
      console.log(this.currentSong);
      
      
    }
    else if(this.isPlayingSong){
      this.currentSong.pause();
      this.isPlayingSong = false;
      this.buttonPlayPause = 'Play';
      
    }
    
  
  }
buttonNext(){
  if (this.currentPlaylistPosition < this.currentPlaylist.length - 1){
    this.currentSong.pause();
    this.currentSong.currentTime = 0;
    this.currentPlaylistPosition = this.currentPlaylistPosition + 1;
    this.currentSong = new Audio (this.currentPlaylist[this.currentPlaylistPosition]);
    this.currentSong.play();
  }
  else {
      this.currentSong.pause();
      this.currentSong.currentTime = 0;
      this.currentPlaylistPosition = 0;
      this.isPlayingSong = false;
      this.currentSong = new Audio (this.currentPlaylist[this.currentPlaylistPosition]);
      this.buttonPlayPause = 'Play';
  }
}
resetSong(){
  this.currentSong.currentTime = 0;
    
}
buttonPrevious(){
  if (this.currentPlaylistPosition > 0){
    this.currentSong.pause();
    this.currentSong.currentTime = 0;
    this.currentPlaylistPosition = this.currentPlaylistPosition - 1;
    this.currentSong = new Audio (this.currentPlaylist[this.currentPlaylistPosition]);
    this.currentSong.play();
  }
  else {
      this.currentSong.pause();
      this.currentSong.currentTime = 0;
      this.currentPlaylistPosition = 0;
      this.isPlayingSong = false;
      this.currentSong = new Audio (this.currentPlaylist[this.currentPlaylistPosition]);
      this.buttonPlayPause = 'Play';
  }


}

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core'
import * as MusicApi from 'music-api'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Injectable()
export class SearchComponent implements OnInit {
  searchResults = [];

  search(){
    let searchElement = (<HTMLInputElement>document.querySelector('#searchInput'))
    let searchQuery = {
      key : searchElement.value.replace(" ", "_"),
      limit: 4,
      page:1,
      raw: false
    }
    let song = {}

    function searchInfos(searchElement, searchQuery){
      this.http
        .get(`http://localhost:8001/api/search/song/qq?key=${searchQuery.key}&limit=${searchQuery.limit}&page=${searchQuery.page}`)
        .subscribe(data => {
          let song = new Song();
          data.songList.forEach((elem)=>{
            song.id = elem.id;
            song.title = elem.name;
            song.album = elem.album.name;
            song.artist = elem.artists[0].name;
            song.cover = elem.cover;
          })
        })
        return song
    }



    // function searchUrl(searchInfos, song){

    //   let searchQuery = {
    //     id: searchInfos.id,
    //     raw: false,
    //     br: 128000 
    //   }
    
    //   this.http
    //     .get(`http://localhost:8001/api/get/song/qq?id=${searchQuery.id}`)
    //     .subscribe(data => {
    //       song.url = data.url
    //       return song
    //     })
    // }

    // console.log(searchInfos(searchElement, searchQuery));
    // // searchUrl(searchInfos, song)

    // console.log('song: ',song)
    // return song
  }


  constructor(private http: HttpClient  ) { }

  ngOnInit(){

  }

}

import {Component, OnInit} from '@angular/core';
import {MusicModel} from "../../model/music.model";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{
  public music?: MusicModel | null;

  constructor(
    private apiService: ApiService,
  ) {

  }
  ngOnInit(): void {
    this.getRandomMusic();
  }

  getRandomMusic() {
    this.apiService.getMusicRandom().subscribe((data) => {
      this.music = data.body;
    });
  }

}

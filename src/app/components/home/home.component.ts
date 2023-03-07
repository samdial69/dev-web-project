import {Component, OnInit} from '@angular/core';
import {MusicModel} from "../../model/music.model";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public musics: MusicModel[] | null = [];

  public searchText: string = "";

  vuecard : boolean = true;
  vuelist : boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getMusics();
  }

  getMusics() {
    this.apiService.getMusics().subscribe((data) => {
      console.log(data.body);
      this.musics = data.body;
    });
  }

  vueCard(){
    this.vuecard = true;
    this.vuelist = false;
  }

  vueList(){
    this.vuecard = false;
    this.vuelist = true;
  }

  delete(id: number) {
    this.apiService.deleteMusic(id).subscribe((data) => {
      this.getMusics();
    });
  }

  search(){
    this.apiService.search(this.searchText).subscribe((data) => {
      this.musics = data.body;
    });
  }
}

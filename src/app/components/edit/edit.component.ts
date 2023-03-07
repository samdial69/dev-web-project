import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MusicModel} from "../../model/music.model";
import {ApiService} from "../../api/api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id?: number;
  public music?: MusicModel |null;

  public editForm: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    artist: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    album: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    duration: new FormControl("", [Validators.required]),
    styles: new FormControl("", [Validators.required]),
    picture: new FormControl("", [Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) this.getMusic(this.id);
    });
  }

  getMusic(id: number){
    this.apiService.getMusic(id).subscribe((data) => {
      this.music = data.body;
      this.editMusic(this.music);
    });
}

  private editMusic(music: MusicModel | null) {
    this.editForm.patchValue({
      title: music?.title,
      artist: music?.artist,
      description: music?.description,
      album: music?.album,
      duration: music?.duration,
      date: music?.date,
      styles: music?.styles,
      picture: music?.picture,
    });
  }

  editMusicReactiveForm() {
    this.apiService.updateMusic(this.id, this.editForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public formGroup: FormGroup
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      title: new FormControl("", [Validators.required]),
      artist: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      album: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      duration: new FormControl("", [Validators.required]),
      styles: new FormControl("", [Validators.required]),
      picture: new FormControl("", [Validators.required]),
    })
  }


  createMusic() {
    this.apiService.createMusicReactiveForm(this.formGroup.value).subscribe((data) => {
      this.router.navigate(['/home']).then(r => console.log(r));
    });
  }

}

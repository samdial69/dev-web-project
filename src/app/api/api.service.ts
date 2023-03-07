import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MusicModel} from "../model/music.model";
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  constructor(private http: HttpClient) { }

  getMusics(): Observable<HttpResponse<MusicModel[]>>{
    return this.http.get<MusicModel[]>('http://localhost:3000/musics', {observe: 'response'});
  }

  getMusicRandom(): Observable<HttpResponse<MusicModel>>{
    return this.http.get<MusicModel>('http://localhost:3000/musics/random', {observe: 'response'});
  }

  getMusic(id: number | undefined): Observable<HttpResponse<MusicModel>>{
    return this.http.get<MusicModel>('http://localhost:3000/musics/' + id, {observe: 'response'});
  }

  getMusicByTitle(title: string): Observable<HttpResponse<MusicModel>>{
    return this.http.get<MusicModel>('http://localhost:3000/musics/title/' + title, {observe: 'response'});
  }

  // createMusic(music: ɵTypedOrUntyped<{ duration: ɵElement<string[], null>; date: ɵElement<string[], null>; image: ɵElement<string[], null>; artist: ɵElement<string[], null>; album: ɵElement<string[], null>; description: ɵElement<string[], null>; styles: ɵElement<string[], null>; title: ɵElement<string[], null> }, ɵFormGroupValue<{ duration: ɵElement<string[], null>; date: ɵElement<string[], null>; image: ɵElement<string[], null>; artist: ɵElement<string[], null>; album: ɵElement<string[], null>; description: ɵElement<string[], null>; styles: ɵElement<string[], null>; title: ɵElement<string[], null> }>, any>): Observable<HttpResponse<MusicModel>>{
  //   return this.http.post<MusicModel>('http://localhost:3000/musics', music, {observe: 'response'});
  // }

  createMusic(music: MusicModel): Observable<HttpResponse<MusicModel>>{
    return this.http.post<MusicModel>('http://localhost:3000/musics', music, {observe: 'response'});
  }

  createMusicReactiveForm(music:MusicModel): Observable<HttpResponse<MusicModel>> {
    return this.http.post<MusicModel>('http://localhost:3000/musics', {
      title: music.title,
      artist: music.artist,
      album: music.album,
      description: music.description,
      duration: music.duration,
      date: music.date,
      image: music.picture,
      styles: music.styles
    }, {observe: 'response'});
  }

  updateMusic(id: number | undefined, music: MusicModel): Observable<any>{
    return this.http.put<MusicModel>('http://localhost:3000/musics/' + id, {
      title: music.title,
      artist: music.artist,
      album: music.album,
      description: music.description,
      duration: music.duration,
      date: music.date,
      image: music.picture,
      styles: music.styles
    },{observe: 'response'});
  }

  deleteMusic(id: number): Observable<any>{
    return this.http.delete('http://localhost:3000/musics/' + id, {observe: 'response'});
  }

  search(title: string): Observable<HttpResponse<MusicModel[]>>{
    return this.http.get<MusicModel[]>('http://localhost:3000/musics/title/' + title, {observe: 'response'});
  }
}

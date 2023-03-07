import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MusicModel} from "../model/music.model";

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

  getMusic(id: number): Observable<HttpResponse<MusicModel>>{
    return this.http.get<MusicModel>('http://localhost:3000/musics/' + id, {observe: 'response'});
  }

  getMusicByTitle(title: string): Observable<HttpResponse<MusicModel>>{
    return this.http.get<MusicModel>('http://localhost:3000/musics/title/' + title, {observe: 'response'});
  }

  createMusic(music: MusicModel): Observable<HttpResponse<MusicModel>>{
    return this.http.post<MusicModel>('http://localhost:3000/musics', music, {observe: 'response'});
  }

  updateMusic(id: number): Observable<any>{
    return this.http.put<MusicModel>('http://localhost:3000/musics/' + id, {observe: 'response'});
  }

  deleteMusic(id: number): Observable<any>{
    return this.http.delete('http://localhost:3000/musics/' + id, {observe: 'response'});
  }
}

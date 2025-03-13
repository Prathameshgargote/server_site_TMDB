import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovie, ImovieResopnse, singlemovie } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MovietabaleService {

  API_CONFIG = environment.apiconfig

  POPULAR_MOVIE_URL: string = `${this.API_CONFIG.basaurl}/movie/popular`

  constructor(
    private _http: HttpClient
  ) { }


  fetchMovie(page: number): Observable<ImovieResopnse<Imovie>> {
    let params = new HttpParams()
      .set('api_key', this.API_CONFIG.api_key)
      .set("page", (page))
      .set("defaultlanguage", this.API_CONFIG.defaultlanguage)

    return this._http.get<ImovieResopnse<Imovie>>(this.POPULAR_MOVIE_URL, {
      params: params
    })

  }


  getmoviebyId(id: string): Observable<singlemovie> {
    let SINGLE_MOVIE_URL = `${this.API_CONFIG.basaurl}/movie/${id}`

    let params = new HttpParams()
    .set('api_key', this.API_CONFIG.api_key)
    .set("defaultlanguage", this.API_CONFIG.defaultlanguage)

    return this._http.get<singlemovie>(SINGLE_MOVIE_URL,{params})
  }
}

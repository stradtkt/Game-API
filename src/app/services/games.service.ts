import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Game } from './../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http: HttpClient) { }
  private readonly base = '/api/games/';

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.base);
  }
  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.base, game);
  }
  removeGame(id: number): Observable<Game> {
    return this.http.delete<Game>(this.base + id);
  }
  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.base + id);
  }
}

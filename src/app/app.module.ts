import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import * as fromGames from './games';
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [AppComponent, ...fromGames.components],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

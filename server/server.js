const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
const config = require('config');
app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../dist/public')));

app.get('/', (req,res) => {
  axios({
    url: 'https://api-v3.igdb.com/games',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': config.api
    },
    data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,url,version_parent,version_title;"
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

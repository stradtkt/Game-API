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
    data: "fields name,platforms,rating_count,release_dates,rating,screenshots,similar_games,standalone_expansions,status,storyline,summary,tags,time_to_beat,total_rating,total_rating_count,url;"
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

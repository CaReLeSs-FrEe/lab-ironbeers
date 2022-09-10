const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('Home.hbs');
});
app.get('/Beers', async (req, res) => {
  const beers = await punkAPI.getBeers()
  // console.log(beers[0]) 
  const data = {
    beers: beers
  }
  res.render('Beers.hbs', data);  
});
app.get('/Random-Beers', async (req, res) => {
  const beers = await punkAPI.getRandom()
  // console.log(beers[0]) 
  const data = {
    beers: beers
  }
  res.render('Random-Beers.hbs', data);
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));

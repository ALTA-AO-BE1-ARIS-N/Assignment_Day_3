const express = require('express');

const app = express();
const port = 3000;

const players = [
  {
    name: 'messi', 
    position: 'forward', 
    country: 'argentina'
  },
  {
    name: 'ronaldo',
    position: 'forward',
    country: 'portugal'
  },
  {
    name: 'neymar',
    position: 'forward',
    country: 'brazil'
  },
  {
    name: 'lionel',
    position: 'midfielder',
    country: 'argentina'
  },
  {
    name: 'rajih',
    position: 'midfielder',
    country: 'indonesia'
  },
  {
    name: 'mahrez',
    position: 'midfielder',
    country: 'algeria'
  },
  {
    name: 'kylian', 
    position: 'defender', 
    country: 'french'
  },
  {
    name: 'pique', 
    position: 'defender', 
    country: 'spain'
  },
  {
    name: 'david', 
    position: 'defender', 
    country: 'brazil'
  },
  {
    name: 'sanchez', 
    position: 'defender', 
    country: 'spain'
  },
];

// API param URL
app.get('/players/:position/:country', (req, res) => {
  const position = req.params.position;
  const country = req.params.country;

  // Filter data array sesuai parameter URL
  const filteredPlayers = players.filter(player => player.position === position && player.country === country);

  res.json(filteredPlayers);
});


// API param query
app.get('/players', (req, res) => {
    const { position, country } = req.query;
  
    let filteredPlayers = players;
  
    // Filter data array dengan konsep tangga
    // dengan filter positin & country
    if (position) {
      filteredPlayers = filteredPlayers.filter(player => player.position === position);
    }
  
    if (country) {
      filteredPlayers = filteredPlayers.filter(player => player.country === country);
    }
  
    res.json(filteredPlayers);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
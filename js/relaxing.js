var randomTrack;

  SC.initialize({
    client_id: '472ea9cffc056ea4f5bc762b4bc00655',
  });

 function playSomeSound(genre) {
    SC.get('/tracks', { genres: genre, limit: 50 }, function(tracks){
      playRandomTrack(tracks);
      playlist = tracks;
    })
  }

  function playRandomTrack(tracks) {
    var randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    embedTrack(randomTrack);
  }

    function embedTrack(pickedTrack) {
    SC.oEmbed(pickedTrack.permalink_url, {auto_play: true, maxheight: 180, color: "#DF3939"}, document.getElementById('target'));
  }

  function pickRandomTrack() {
    randomIndex = Math.floor(Math.random() * playlist.length);
    randomTrack = playlist.splice(randomIndex, 1)[0];
  }

  $("#playButton").click(function(e){
    e.preventDefault();
    playSomeSound("coffeehouse");
    pickRandomTrack() // also e.currentTarget
    embedTrack(randomTrack);
  });
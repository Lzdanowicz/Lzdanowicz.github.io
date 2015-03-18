// var request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   }
// };

// request.open('GET', 'http://api.soundcloud.com/tracks?client_id=472ea9cffc056ea4f5bc762b4bc00655');
// request.send();
var randomTrack;

  SC.initialize({
    client_id: '472ea9cffc056ea4f5bc762b4bc00655',
    redirect_uri: 'http://www.soundcloud.com/voamusic'
  });

 function playSomeSound(genre) {
    SC.get('/tracks', { genres: genre, limit: 100 }, function(tracks){
      playRandomTrack(tracks);
      playlist = tracks;
    })
  }

  function playRandomTrack(tracks) {
    var randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    embedTrack(randomTrack);
  }

    function embedTrack(pickedTrack) {
    SC.oEmbed(pickedTrack.permalink_url, {auto_play: true, maxheight: 200, color: "#DF3939"}, document.getElementById('target'));
  }


  $("#playButton").click(function(e){
    e.preventDefault();
    playSomeSound("jazz"); // also e.currentTarget
    embedTrack(randomTrack);
  });

















// function playSomeSound(genre){
// SC.get(
//   '/tracks',
//     {
//     genres:genre,
//     limit:100
//   },
//   function(tracks){
//     var random=Math.floor(Math.random()*49);
//     SC.oEmbed(tracks[random].permalink_url, {auto_play:true}, document.getElementsByClassName('target'));
//   });
// };



// window.onload=function(){
// SC.initialize({
//   client_id: '472ea9cffc056ea4f5bc762b4bc00655',
// });
// var link = document.getElementById('playButton');
// link.onclick = function(e){
//   e.preventDefault();
//   playSomeSound("jazz");
//   };
// };






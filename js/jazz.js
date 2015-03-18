
function playSomeSound(genre){
SC.get('/tracks',{
    genres: genre,
    bpm:{
      from:100
    }
  }, function(tracks){
    var random=Math.floor(Math.random()*49);
    SC.oEmbed(tracks[random]).uri,{auto_play:true}, document.getElementById('target')
  });
}



window.onload=function(){
SC.initialize({
  client_id: '472ea9cffc056ea4f5bc762b4bc00655',
});

var link = document.getElementById('playButton')
link.onclick = function(e){
  e.preventDefault();
  playSomeSound("jazz");
}

};






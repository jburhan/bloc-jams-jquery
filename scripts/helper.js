class Helper{
  playPauseAndUpdate(song) {
    player.playPause();
    const duration = player.getDuration();
    $('#time-control .total-time').text( player.prettyTime(duration) );

  };



};




const helper = new Helper();

{
  $('button#play-pause').on('click', function() {
    player.playPause();
    // his step is necessarily to change the button to pause when
    //the music is playing
    $(this).attr('playState', player.playState);

  });

  $('button#next').on('click', function(){
    //this step is to ensure that the playState
    // is playing underwise,it will cancel the function
    if (player.playState !== 'playing'){return}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length){ return };
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);


  });

  $('button#previous').on('click', function(){
    if (player.playState !== 'playing') {return};

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0){ return };
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);


  });
}

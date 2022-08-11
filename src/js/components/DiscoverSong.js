import Song from './Song.js';

class DiscoverSong {
  constructor(data){
    const thisDiscoverSong = this;

    thisDiscoverSong.data = data;


    thisDiscoverSong.randomSong();

  }

  randomSong(){
    const thisDiscoverSong = this;

    const songsNumber = thisDiscoverSong.data.songs.length;


    const randomNumber = Math.floor(Math.random() * songsNumber);

    new Song(thisDiscoverSong.data.songs[randomNumber]);


    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.gap',
      stopOthersOnPlay: true
    });

  }



}

export default DiscoverSong;

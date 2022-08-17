import { templates} from '../settings.js';
import { utils } from '../utils.js';

class Song {
  constructor(data, wrapperElement){
    const thisSong = this;

    thisSong.data = data;
    thisSong.dom = {};
    thisSong.dom.wrapper = wrapperElement;

    thisSong.songData();
    thisSong.renderInSongs();

  }

  renderInSongs(){
    const thisSong = this;

    const generatedHTML = templates.songWidget(thisSong.songData);
    thisSong.element = utils.createDOMFromHTML(generatedHTML);
    const songContainer = thisSong.dom.wrapper;
    songContainer.appendChild(thisSong.element);
  }



  songData(){
    const thisSong = this;
    let categoryName = '';

    for(let category in thisSong.data.categories){
      categoryName += categoryName + ' ' + thisSong.data.categories[category];
    }
    categoryName = categoryName.replace(' ','');
    categoryName = categoryName.replaceAll(' ', ', ');

    thisSong.songData = {};

    thisSong.songData.song = thisSong.data.filename;
    thisSong.songData.title = thisSong.data.title;
    thisSong.songData.author = thisSong.getAuthorName(thisSong.data.filename);
    thisSong.songData.categories = categoryName;
    thisSong.songData.ranking = thisSong.data.ranking;
  }

  getAuthorName(author){
    const thisSong = this;

    let title = thisSong.data.title;
    const regEx = new RegExp(title,'i');

    author = thisSong.data.filename;
    author = author.replaceAll('_',' ');
    author = author.replaceAll('-','');
    author = author.replace('.mp3', '');
    author = author.replace(regEx, '');

    return author;
  }
}

export default Song;

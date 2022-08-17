import {select, templates} from '../settings.js';
import { utils } from '../utils.js';
import Song from './Song.js';

class SearchWidget{
  constructor(data){
    const thisWidget = this;

    thisWidget.data = data;

    thisWidget.dom = {};

    thisWidget.getElements();
    thisWidget.initActions();
  }

  getElements(){
    const thisWidget = this;

    thisWidget.dom.input = document.querySelector(select.form.input);
    thisWidget.dom.button = document.querySelector(select.form.button);
    thisWidget.dom.searchWrapper = document.querySelector(select.containerOf.search);
    thisWidget.dom.resultAmountWrapper = document.querySelector(select.containerOf.resultAmount);
    thisWidget.dom.resultAmountText = document.querySelector(select.containerOf.resultAmountText);
  }

  initActions(){
    const thisWidget = this;

    thisWidget.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.clearResults();
      thisWidget.initSearch();
    });
  }

  initSearch(){
    const thisWidget = this;

    let resultNumber = 0;
    thisWidget.value = document.getElementById(select.form.input).value;
    let valueRegExp = new RegExp(thisWidget.value, 'i');

    for (let song in thisWidget.data.songs){
      let filename = thisWidget.data.songs[song].filename;
      const findAmount = filename.search(valueRegExp);

      if(findAmount >= 0){
        resultNumber++;
        new Song(thisWidget.data.songs[song], thisWidget.dom.searchWrapper);

        // eslint-disable-next-line no-undef
        GreenAudioPlayer.init({
          selector: '.search-wrapper .gap',
          stopOthersOnPlay: true
        });
      }
    }

    thisWidget.amount ={};

    if(resultNumber == 1){
      thisWidget.amount.number = resultNumber.toString(10) + ' song';
    } else{
      thisWidget.amount.number = resultNumber.toString(10) + ' songs';
    }

    const generatedHTML = templates.resultAmount(thisWidget.amount);
    thisWidget.element = utils.createDOMFromHTML(generatedHTML);
    const amountContainer = thisWidget.dom.resultAmountWrapper;
    amountContainer.appendChild(thisWidget.element);
  }

  clearResults(){
    const thisWidget = this;

    thisWidget.dom.searchWrapper.innerHTML = '';
    thisWidget.dom.resultAmountWrapper.innerHTML = '';
  }
}

export default SearchWidget;

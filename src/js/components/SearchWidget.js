import {select} from '../settings.js';

class SearchWidget{
  constructor(data){
    const thisWidget = this;

    thisWidget.data = data;
    console.log('data', thisWidget.data);
    thisWidget.dom = {};

    thisWidget.getElements();
    thisWidget.initActions();
  }

  getElements(){
    const thisWidget = this;


    thisWidget.dom.input = document.querySelector(select.form.input);
    thisWidget.dom.button = document.querySelector(select.form.button);
  }

  initActions(){
    const thisWidget = this;

    thisWidget.dom.button.addEventListener('click', function(event){
      event.preventDefault();


      console.log('kliknąłem w guzik');
      thisWidget.initSearch();
    });
  }

  initSearch(){
    const thisWidget = this;

    thisWidget.value = document.getElementById('search').value;

    console.log('value', thisWidget.value);
  }
}

export default SearchWidget;

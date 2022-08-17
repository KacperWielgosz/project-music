export const select = {
  templateOf: {
    songWidget: '#template-song-widget',
    resultAmount: '#template-result-amount'
  },

  containerOf: {
    songList: '#song-list',
    pages: '#pages',
    subscribe: '.subscribe',
    home: '.home-wrapper',
    discover: '.discover-wrapper',
    search: '.search-wrapper',
    resultAmount: '.result-amount-wrapper',
    resultAmountText: '.result-amount-text'
  },

  nav: {
    links: '.main-nav a'
  },

  form: {
    input: 'search-input',
    button: '.search-form button'
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  subscribe: {
    active: 'active'
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',

  }
};

export const templates = {
  songWidget: Handlebars.compile(document.querySelector(select.templateOf.songWidget).innerHTML),
  resultAmount: Handlebars.compile(document.querySelector(select.templateOf.resultAmount).innerHTML)
};

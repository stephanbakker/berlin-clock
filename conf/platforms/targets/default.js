'use strict';
const path = require('path');

module.exports = {
  app: {
    name: 'Some application name',
    title: 'Some application title'
  },
  server: {
    port: 5000
  },
  folders: {
    build: path.join(__dirname, '../../../public')
  },
  build: {},
  services: {
    html: {
      links: [
        { rel: 'stylesheet', type: 'text/css', href: '/styles.css' }
      ],
      scripts: [
        { type: 'text/javascript', src: '/libs.js' },
        { type: 'text/javascript', src: '/main.js' }
      ]
    }
  }
};

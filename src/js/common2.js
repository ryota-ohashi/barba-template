import '../scss/style.scss';
import barba from '@barba/core';

var COMMON = COMMON || {};

COMMON = {
  init: function() {
    this.bind();
  },
  bind: function() {

    // barbaセット
    barba.init({

    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  COMMON.init();
});
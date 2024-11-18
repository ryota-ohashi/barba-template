import '../scss/style.scss';
import barba from '@barba/core';
import transAnim from './modules/transAnim';
import replaceHead from './modules/replaceHead';

// pages
import TOP from './pages/top'
import ABOUT from './pages/about'
import NEWS from './pages/news'

var COMMON = COMMON || {};

COMMON = {
  init: function() {
    this.bind();
  },
  bind: function() {

    // barbaセット
    barba.init({
      debug: false, // デフォルト：false
      transitions: [{
        beforeOnce(data) {

          // 初期ロード時にページごとのjsを実行
          switch (data.next.namespace) {
            case "top":
              TOP.init();
              break;
            case "about":
              ABOUT.init();
              break;
            case "news":
              NEWS.init();
              break;
            default:
              break;
          }
        },
        once() {

        },
        afterOnce() {

        },
        before() {

        },
        beforeLeave() {

        },
        async leave() {

          // 遷移アニメーション開始
          transAnim("start");

          // アニメーションを待つ
          await new Promise((resolve) => {
            return setTimeout(resolve, 1600);
          });

        },
        afterLeave() {

        },
        beforeEnter(data) {

          // メタタグの変更
          replaceHead(data);
        },
        enter() {

          // 遷移アニメーション終了
          transAnim("end");

        },
        afterEnter() {
        },
        after(data) {

          // 遷移後、そのページごとのjsを実行
          switch (data.next.namespace) {
            case "top":
              TOP.init();
              break;
            case "about":
              ABOUT.init();
              break;
            case "news":
              NEWS.init();
              break;
            default:
              break;
          }
        }
      }],
      views: [{
        namespace: 'top',
        beforeLeave() {
          console.log('namespace:top');
        },
        afterLeave() {

        },
        beforeEnter() {

        },
        afterEnter(data) {
          console.log('遷移先は：' + data.next.namespace);
        }
      },{
        namespace: 'about',
        beforeLeave() {
          console.log('namespace:about');
        },
        afterLeave() {

        },
        beforeEnter() {

        },
        afterEnter(data) {
          console.log('遷移先は：' + data.next.namespace);
        }
      },{
        namespace: 'news',
        beforeLeave() {
          console.log('namespace:news');
        },
        afterLeave() {

        },
        beforeEnter() {

        },
        afterEnter(data) {
          console.log('遷移先は：' + data.next.namespace);
        }
      }]
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  COMMON.init();
});
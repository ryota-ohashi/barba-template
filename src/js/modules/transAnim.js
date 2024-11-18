import anime from "animejs";

export default function transAnim(status) {
  const elMask = document.querySelector('.mask');
  const elMaskBk = document.querySelector('.mask-bk');
  const elMaskWh = document.querySelector('.mask-wh');

  // 閉じるアニメーション
  if (status === "start") {
    anime({
      begin: function() {
        elMaskBk.style.left = "-100%";
        elMaskWh.style.left = "-100%";
        elMask.style.display = "block";
        elMask.style.opacity = "1";
      }
    });
    let tl1 = anime.timeline({
      easing: 'easeOutQuint',
      duration: 800,
    });
    tl1
    .add({
      targets: elMaskBk,
      translateX: "100%",
    })
    .add({
      targets: elMaskWh,
      translateX: "100%",
    });
  }

  // 開くアニメーション
  if (status === "end") {
    anime({
      targets: elMask,
      opacity: "0",
      duration: 1200,
      complete: function() {
        elMask.style.display = "none";
        elMask.style.opacity = "1";
        elMaskBk.style.transform = "translateX(0)";
        elMaskWh.style.transform = "translateX(0)";
      }
    });
  }
}
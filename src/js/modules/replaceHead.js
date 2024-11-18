export default function replacehead(data) {
  const head = document.head;
  const newPageRawHead = data.next.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
  const newPageHead = document.createElement('head');
  newPageHead.innerHTML = newPageRawHead;

  const removeHeadTags = [
      "meta[name='description']",
      "meta[property^='og']",
  ].join(',');

  const headTags = head.querySelectorAll(removeHeadTags);

  for(let i = 0; i < headTags.length; i++ ){
    head.removeChild(headTags[i]);
  }

  const newHeadTags = newPageHead.querySelectorAll(removeHeadTags);

  for(let i = 0; i < newHeadTags.length; i++ ){
    head.appendChild(newHeadTags[i]);
  }
}
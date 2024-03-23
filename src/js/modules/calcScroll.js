const calcScroll = () => {
  let div = document.createElement("div");
  div.style.width = "50";
  div.style.height = "50";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

export default calcScroll;

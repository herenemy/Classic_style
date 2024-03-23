import calcScroll from "./calcScroll";

const images = () => {
  const imgPopup = document.createElement("div"),
    works = document.querySelector(".works"),
    bigImg = document.createElement("img"),
    scroll = calcScroll();

  works.appendChild(imgPopup);

  bigImg.style.width = "50%";
  bigImg.style.maxHeight = "90%";
  bigImg.classList.add("faded");

  imgPopup.classList.add("popup");
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImg);

  works.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      console.log("hello");

      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
};

export default images;

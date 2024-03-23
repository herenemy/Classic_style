const images = () => {
  const imgPopup = document.createElement("div"),
    works = document.querySelector(".works"),
    bigImg = document.createElement("img");

  imgPopup.classList.add("popup");
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  works.appendChild(imgPopup);
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
    }
  });
};

export default images;

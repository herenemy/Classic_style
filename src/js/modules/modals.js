import calcScroll from "./calcScroll";

const modals = (state) => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    isClickedOverlay = true,
    objLength,
    modalContent
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      modalWindow = document.querySelector(modalContent),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) e.preventDefault();
        const emptyError = document.createElement("div");

        if (Object.keys(state).length < objLength) {
          emptyError.textContent = "Заполните все поля!";
          emptyError.classList.add("status");
          modalWindow.appendChild(emptyError);
          return;
        } else {
          emptyError.remove();
          windows.forEach((item) => {
            item.style.display = "none";
          });

          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
          //   document.body.classList.add("modal-open");
        }
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
      //   document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && isClickedOverlay) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  // function calcScroll() {
  //   let div = document.createElement("div");

  //   div.style.width = "50";
  //   div.style.height = "50";
  //   div.style.overflowY = "scroll";
  //   div.style.visibility = "hidden";

  //   document.body.appendChild(div);
  //   let scrollWidth = div.offsetWidth - div.clientWidth;
  //   div.remove();

  //   return scrollWidth;
  // }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc .popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile .popup_calc_profile_close",
    false,
    3,
    ".popup_calc_content"
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end .popup_calc_end_close",
    false,
    4,
    ".popup_calc_profile_content"
  );
  // showModalByTime(".popup", 60000);
};

export default modals;

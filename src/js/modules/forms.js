import validateNumInput from "./validateNumInput";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input");

  validateNumInput(document.querySelectorAll('input[name="user_phone"]'));

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "При отправке что-то пошло не так",
  };

  const clearInputs = () => {
    input.forEach((item) => {
      item.value = "";
    });
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") == "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
        document.querySelector(".popup_calc_end").style.display = "none";
        document.body.style.overflow = "";
        Object.keys(state).forEach((keys) => {
          delete state[keys];
        });
        statusMessage.remove();
      }

      postData(`assets/server.php`, formData)
        .then((data) => {
          console.log(data);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;

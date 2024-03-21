const forms = () => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input"),
    phoneInput = document.querySelectorAll(`input[name="user_phone"]`);

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "При отправке что-то пошло не так",
  };

  phoneInput.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "");
    });
  });

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

const validateNumInput = (selector) => {
  selector.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "");
    });
  });
};

// export const validateEmptyInput = (selector) => {
//   selector.forEach((input, btn) => {
//     if (input.classList.contains("form-control")) {
//       if (input.value == "") {
//         console.log("wrong");
//         btn.setAttribute("disabled", "");
//       } else {
//         console.log("this time true");
//       }
//     }
//   });
// };

export default validateNumInput;

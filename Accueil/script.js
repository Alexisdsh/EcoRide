
  //Bouton Passager + -
  const btnPlus = document.querySelector(".btn-plus");
  const btnMinus = document.querySelector(".btn-minus");
  const countSpan = document.getElementById("passager-nombre");
  const hiddenInput = document.getElementById("passager-input");

  let count = 1;

  btnPlus.addEventListener("click", () => {
    if (count < 5) {
      count++;
      updateDisplay();
    }
  });

  btnMinus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countSpan.textContent = count;
    hiddenInput.value = count;
  }


//date 
flatpickr("#date-custom", {
  dateFormat: "d/m/Y",
  altInput: true,
  altFormat: "j F Y",
  locale: 'fr'
});


document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  const form = document.getElementById('proposal-form');
  const gifContainer = document.getElementById('gif-container');

  let isYesFirst = true;

  noButton.addEventListener('mouseover', swapButtons);
  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    swapButtons();
  });

  yesButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    gifContainer.classList.remove('hidden');
    gifContainer.style.display = 'block';
  });

  function swapButtons() {
    const buttonsContainer = yesButton.parentNode;
    if (isYesFirst) {
      buttonsContainer.insertBefore(noButton, yesButton);
    } else {
      buttonsContainer.insertBefore(yesButton, noButton);
    }
    isYesFirst = !isYesFirst;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  let isYesFirst = true; // Track the current position of the "Yes" button

  noButton.addEventListener('mouseover', swapButtons);
  noButton.addEventListener('click', swapButtons);
  yesButton.addEventListener('click', displayMessage);

  function swapButtons() {
    const buttonsContainer = yesButton.parentNode;

    // Check if "Yes" button is first or second
    if (isYesFirst) {
      // If "Yes" button is first, swap positions
      buttonsContainer.insertBefore(noButton, yesButton);
      isYesFirst = false;
    } else {
      // If "No" button is first, swap positions
      buttonsContainer.insertBefore(yesButton, noButton);
      isYesFirst = true;
    }
  }

  function displayMessage() {
    alert("You've made me the happiest person alive!");
  }
});

document.addEventListener('keydown',(e)=>{
  if(e.key == "Tab"){
    e.preventDefault();
  }
});

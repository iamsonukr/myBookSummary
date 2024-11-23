const popup = document.getElementById('customPopup');
const overlay = document.getElementById('popupOverlay');
const closeButton = document.getElementById('closePopup');

// Function to show the popup
function showPopup() {
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Set interval to show the popup every 10 seconds
// setInterval(() => {
//   showPopup();
// }, 10000);

// Close the popup on button click
closeButton.addEventListener('click', hidePopup);

// Close the popup when clicking outside it
overlay.addEventListener('click', hidePopup);

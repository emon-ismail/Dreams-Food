const activePage=window.location.pathname;
console.log(activePage);

// JavaScript to open and close the side panel
function openNav() {
  var screenWidth = window.innerWidth;
  var maxWidth = 360; // Maximum width for the side panel
  
  // Ensure the width doesn't exceed the maximum width or the screen width
  var width = Math.min(screenWidth, maxWidth);
  
  document.getElementById("mySidepanel").style.width = width + "px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

   // Get a reference to the button
   const placeOrderBtn = document.getElementById('placeOrderBtn');

   // Add a click event listener to the button
   placeOrderBtn.addEventListener('click', function() {
     // Call Swal.fire to display a simple SweetAlert2 modal
     Swal.fire("Order Placed!", "Your order has been successfully placed.", "success");
   });


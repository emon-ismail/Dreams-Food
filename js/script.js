const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});
 // Wait for the DOM to be fully loaded
 document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the button
    const placeOrderBtn = document.getElementById('placeOrderBtn');

    // Add a click event listener to the button
    placeOrderBtn.addEventListener('click', function() {
      // Call Swal.fire to display a simple SweetAlert2 modal
      Swal.fire("Order Placed!", "Your order has been successfully placed.", "success");
    });
  });

  
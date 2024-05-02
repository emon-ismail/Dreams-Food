const activePage=window.location.pathname;
console.log(activePage);




function toggleCart(){
  document.querySelector('.sidecart').classList.toggle('open-cart');
}
toggleCart();


   // Get a reference to the button
   const placeOrderBtn = document.getElementById('placeOrderBtn');

   // Add a click event listener to the button
   placeOrderBtn.addEventListener('click', function() {
     // Call Swal.fire to display a simple SweetAlert2 modal
     Swal.fire("Order Placed!", "Your order has been successfully placed.", "success");
   });


  

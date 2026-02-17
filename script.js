// Open Request Button Click Handler
document.querySelectorAll('.open-btn').forEach(button => {
  button.addEventListener('click', function() {
    alert("You clicked 'Open Request'. In a real app, this would open the detailed request page.");
    // Uncomment below line if you want to redirect to another page
    // window.location.href = "request-detail.html";
  });
});
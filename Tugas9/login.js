document.getElementById("loginButton").addEventListener("click", function() {
    // Redirect to product_reponsive.html
    window.location.href = "product_pesponsive.html";
});
// login.js
 
    document.addEventListener('DOMContentLoaded', function() {
        var menuToggle = document.querySelector('.menu-toggle');
        var inMenu = document.querySelector('.inmenu');

        menuToggle.addEventListener('click', function() {
            inMenu.classList.toggle('active');
        });
    });
 





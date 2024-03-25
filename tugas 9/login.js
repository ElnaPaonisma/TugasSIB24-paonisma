// script.js

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mendapatkan nilai input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Memeriksa jika username dan password benar
    if (username === "admin" && password === "12345") {
        // Redirect ke halaman product_responsive.html
        window.location.href = "product_responsive.html";
    } else {
        // Menampilkan pesan kesalahan
        alert("Username or password anda salah");
    }
});  
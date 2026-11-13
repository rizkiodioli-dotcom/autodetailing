// Mengambil elemen hamburger dan daftar menu berdasarkan ID-nya
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Menambahkan event listener saat ikon hamburger diklik
hamburger.addEventListener('click', () => {
  // Toggle kelas 'active' pada nav-links untuk memunculkan/menyembunyikan menu
  navLinks.classList.toggle('active');
});
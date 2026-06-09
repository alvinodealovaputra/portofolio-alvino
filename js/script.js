// --- 1. TYPING ANIMATION (HERO SECTION) ---
const words = ["Si penjelajah", "Web Developer", "Conten creator", "apps development", "iot development", "DRIVING"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}


// --- 2. LOGIKA HAMBURGER MENU (SLIDE DARI KIRI HP) ---
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Pastikan elemen hamburger ada di HTML sebelum menjalankan fungsi
    if (hamburger && navMenu) {
        // Event: Buka/Tutup menu saat tombol hamburger diklik
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Event: Tutup menu otomatis saat salah satu link menu diklik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}


// --- 3. INITIALIZATION (MENJALANKAN FUNGSI SAAT DOM SIAP) ---
document.addEventListener("DOMContentLoaded", function() {
    typingEffect();       // Jalankan efek mengetik
    initHamburgerMenu();  // Jalankan fungsi hamburger menu mobile
});


// --- 4. SCROLL REVEAL ANIMATIONS ---
// Mengonfigurasi ScrollReveal bawaan untuk animasi transisi saat di-scroll
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false // ubah jadi true jika ingin animasi selalu berulang tiap scroll ke atas-bawah
});

// Menerapkan animasi ke elemen spesifik dengan variasi arah
sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.reveal-left', { origin: 'left', distance: '80px' });
sr.reveal('.reveal-right', { origin: 'right', distance: '80px' });

// Memberikan delay bertahap untuk elemen yang berurutan
sr.reveal('.delay-1', { delay: 400 });
sr.reveal('.project-card', { interval: 200 }); // Muncul bergantian (staggered)
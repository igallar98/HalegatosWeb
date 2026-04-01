// Initialize Lucide icons
lucide.createIcons();

// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('nav-container');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const navJoinBtn = document.getElementById('nav-join-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

// Set active link based on clean URLs
let currentPath = window.location.pathname.replace(/\/$/, '').replace(/\.html$/, '');
if (currentPath === '') currentPath = '/';

navLinks.forEach(link => {
  let linkPath = link.getAttribute('href').replace(/\/$/, '');
  if (linkPath === '') linkPath = '/';
  
  if (currentPath === linkPath) {
    link.classList.add('active-link');
  }
});

function handleScroll() {
  if (window.scrollY > 20) {
    navbar.classList.remove('top-0', 'w-full', 'bg-transparent', 'py-6', 'px-4');
    navbar.classList.add('top-4', 'left-4', 'right-4', 'md:left-1/2', 'md:-translate-x-1/2', 'md:w-auto', 'md:min-w-[850px]', 'bg-white/90', 'backdrop-blur-md', 'shadow-glass', 'rounded-full', 'py-3', 'px-6', 'border', 'border-white/20');
    navContainer.classList.remove('max-w-7xl', 'mx-auto');
    
    navLogo.classList.remove('brightness-0', 'invert', 'drop-shadow-lg');
    navLogo.classList.add('group-hover:scale-105');

    navLinks.forEach(link => {
      link.classList.remove('text-white/90', 'hover:text-white', 'hover:bg-white/10');
      if (link.classList.contains('active-link')) {
        link.classList.add('text-hale-blue', 'bg-hale-light');
      } else {
        link.classList.add('text-slate-600', 'hover:text-hale-blue', 'hover:bg-hale-light');
      }
    });

    navJoinBtn.classList.remove('bg-white', 'text-hale-blue', 'hover:bg-gray-100');
    navJoinBtn.classList.add('bg-gradient-to-r', 'from-hale-blue', 'to-hale-cyan', 'text-white', 'hover:shadow-glow');

    mobileMenuBtn.classList.remove('text-white', 'hover:bg-white/10');
    mobileMenuBtn.classList.add('text-slate-800', 'hover:bg-gray-100');
  } else {
    navbar.classList.add('top-0', 'w-full', 'bg-transparent', 'py-6', 'px-4');
    navbar.classList.remove('top-4', 'left-4', 'right-4', 'md:left-1/2', 'md:-translate-x-1/2', 'md:w-auto', 'md:min-w-[850px]', 'bg-white/90', 'backdrop-blur-md', 'shadow-glass', 'rounded-full', 'py-3', 'px-6', 'border', 'border-white/20');
    navContainer.classList.add('max-w-7xl', 'mx-auto');
    
    navLogo.classList.add('brightness-0', 'invert', 'drop-shadow-lg');
    navLogo.classList.remove('group-hover:scale-105');

    navLinks.forEach(link => {
      link.classList.remove('text-slate-600', 'hover:text-hale-blue', 'hover:bg-hale-light', 'text-hale-blue', 'bg-hale-light');
      if (link.classList.contains('active-link')) {
        link.classList.add('text-white', 'bg-white/20');
      } else {
        link.classList.add('text-white/90', 'hover:text-white', 'hover:bg-white/10');
      }
    });

    navJoinBtn.classList.add('bg-white', 'text-hale-blue', 'hover:bg-gray-100');
    navJoinBtn.classList.remove('bg-gradient-to-r', 'from-hale-blue', 'to-hale-cyan', 'text-white', 'hover:shadow-glow');

    mobileMenuBtn.classList.add('text-white', 'hover:bg-white/10');
    mobileMenuBtn.classList.remove('text-slate-800', 'hover:bg-gray-100');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Init

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains('opacity-100');
  if (isOpen) {
    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-10');
  } else {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-10');
    mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

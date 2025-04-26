// script.js — Menu responsivo
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-list');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

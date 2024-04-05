'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const border1 = document.getElementById('border1');
  const border2 = document.getElementById('border2');
  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const h1 = document.querySelector('h1');
  const lists = document.querySelectorAll('#menu ul li');

  hamburger.addEventListener('click',() => {
    border1.classList.toggle('show');
    border2.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.toggle('show');
    h1.classList.toggle('show');
  });

  mask.addEventListener('click',() => {
    border1.classList.toggle('show');
    border2.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.remove('show');
    h1.classList.toggle('show');
  });

  lists.forEach((list) => {
    list.addEventListener('click', () => {
     border1.classList.toggle('show');
     border2.classList.toggle('show');
     menu.classList.toggle('show');
     mask.classList.toggle('show');
     h1.classList.toggle('show');
    });
  });
}
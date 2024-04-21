'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const border1 = document.getElementById('border1');
  const borderC = document.getElementById('border-center');
  const border2 = document.getElementById('border2');
  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const lists = document.querySelectorAll('#menu ul li');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    border1.classList.toggle('show');
    borderC.classList.toggle('show');
    border2.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.toggle('show');
    body.style.overflow = 'hidden';
  });

  mask.addEventListener('click', () => {
    border1.classList.toggle('show');
    borderC.classList.toggle('show');
    border2.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.remove('show');
    body.style.overflow = 'hidden';
  });

  lists.forEach((list) => {
    list.addEventListener('click', () => {
      border1.classList.toggle('show');
      borderC.classList.toggle('show');
      border2.classList.toggle('show');
      menu.classList.toggle('show');
      mask.classList.toggle('show');
      body.style.overflow = 'hidden';
    });
  });


  const target1 = document.querySelector('main .about .about-main .about-img');
  const target2 = document.querySelector('main .service .service-main .service-img');
  const target3 = document.querySelector('main .service .service-supply>div .service1');
  const target4 = document.querySelector('main .service .service-supply>div .service2');
  const target5 = document.querySelector('main .service .service-supply>div .service3');
  const target6 = document.querySelector('main .service .service-supply>div .service4');
  const target7 = document.querySelector('main .service .service-example>div .example1');
  const target8 = document.querySelector('main .service .service-example>div .example2');
  const target9 = document.querySelector('main .service .service-example>div .example3');
  const target10 = document.querySelector('main .recruit .recruit-content .recruit-img');

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition1 = target1.getBoundingClientRect().top;

    if (targetItemPosition1 < targetPosition) {
      target1.style.opacity = '1';
      target1.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition2 = target2.getBoundingClientRect().top;

    if (targetItemPosition2 < targetPosition) {
      target2.style.opacity = '1';
      target2.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target3.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target3.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target4.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target4.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target5.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target5.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target6.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target6.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target7.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target7.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target8.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target8.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target9.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target9.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 2 / 3;
    let targetItemPosition3 = target10.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target10.style.opacity = '1';
      target10.style.transform = 'translateY(0)';
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contact-btn');

    function update() {
      const check1 = document.getElementById('check1').value.trim();
      const check2 = document.getElementById('check2').value.trim();
      const check3 = document.getElementById('check3').value.trim();
      const check4 = document.getElementById('check4').value.trim();
      const check5 = document.getElementById('check5').value.trim();
      const check6 = document.getElementById('check6').value.trim();

      if(check1 !== '-- お問い合わせ種別を選択してください --' && check2 !== '' && check3 !== '' && check4 !== '' && check5 !== '' && check6 !== '' && document.getElementById('check7').checked && check3 === check4) {
        contactBtn.classList.add('show');
      } else {
        contactBtn.classList.remove('show');
      }
    }

    check1.addEventListener("input", update);
    check2.addEventListener("input", update);
    check3.addEventListener("input", update);
    check4.addEventListener("input", update);
    check5.addEventListener("input", update);
    check6.addEventListener("input", update);
    check7.addEventListener("change", update);

    update();
  });
}
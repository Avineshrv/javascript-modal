'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = document.querySelectorAll('.show-modal');
console.log(openModal);

const openTheModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i].textContent);
  openModal[i].addEventListener('click', openTheModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const counterEl = document.getElementById('counter');
const counterBtn = document.getElementById('counterBtn');
const quoteEl = document.getElementById('quote');

const quotes = [
  'Двигаемся спокойно, но стабильно.',
  'Один закрытый пункт — уже прогресс.',
  'Лучше маленький шаг сегодня, чем идеальный план завтра.',
  'Системность > рывки.'
];

let count = Number(localStorage.getItem('productivityCount') || 0);
let isAlt = localStorage.getItem('palette') === 'alt';

if (isAlt) root.classList.add('alt');
counterEl.textContent = String(count);
quoteEl.textContent = quotes[count % quotes.length];

themeBtn.addEventListener('click', () => {
  root.classList.toggle('alt');
  isAlt = root.classList.contains('alt');
  localStorage.setItem('palette', isAlt ? 'alt' : 'default');
});

counterBtn.addEventListener('click', () => {
  count += 1;
  counterEl.textContent = String(count);
  quoteEl.textContent = quotes[count % quotes.length];
  localStorage.setItem('productivityCount', String(count));
});

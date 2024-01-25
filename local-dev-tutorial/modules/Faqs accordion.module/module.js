const questionItems = document.querySelectorAll('.faq-question');

questionItems.forEach((question) => {
question.addEventListener('click', () => {
const answer = question.nextElementSibling;
answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
const toggleIcon = question.querySelector('.toggle-icon');
toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
});
});
document.addEventListener('DOMContentLoaded', function () {
  const monthlyButton = document.getElementById('monthlyButton');
  const prepaidButton = document.getElementById('prepaidButton');
  const show = document.querySelectorAll('.show');
  const hide = document.querySelectorAll('.hide');

  monthlyButton.addEventListener('click', function () {
    show.forEach(item => {
    item.classList.toggle('hide');
    })
    this.classList.add('active');
    prepaidButton.classList.remove('active');
  });

  prepaidButton.addEventListener('click', function () {
    show.forEach(item => {
    item.classList.toggle('hide');
    })
    this.classList.add('active');
    monthlyButton.classList.remove('active');
  });
});
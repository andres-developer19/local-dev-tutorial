document.addEventListener('DOMContentLoaded', function () {
  const monthlyButton = document.getElementById('monthlyButton');
  const prepaidButton = document.getElementById('prepaidButton');

  monthlyButton.addEventListener('click', function () {
    this.classList.add('active');
    prepaidButton.classList.remove('active');
  });

  prepaidButton.addEventListener('click', function () {
    this.classList.add('active');
    monthlyButton.classList.remove('active');
  });
});
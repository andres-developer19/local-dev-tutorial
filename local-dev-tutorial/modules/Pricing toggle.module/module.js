
const monthlyButton = document.querySelector('.toggle-button:nth-child(1)');
const annualButton = document.querySelector('.toggle-button:nth-child(2)');
const monthlyPrice = document.getElementById('monthlyPrice');
const annualPrice = document.getElementById('annualPrice');
const monthlyDescription = document.getElementById('monthlyDescription');
const annualDescription = document.getElementById('annualDescription');
const titleMonthly = document.getElementById('titleMonthly');
const titleAnnual = document.getElementById('titleAnnual');
const btnMonthly = document.getElementById('btnMonthly');
const btnAnnual = document.getElementById('btnAnnual');


function toggleView(view) {
if (view === 'monthly') {
    monthlyButton.classList.add('active');
    annualButton.classList.remove('active');
    monthlyPrice.style.display = 'inline-block';
    annualPrice.style.display = 'none';
    monthlyDescription.style.display = 'inline-block';
    annualDescription.style.display = 'none';
    titleMonthly.style.display = 'block';
    titleAnnual.style.display = 'none';
    btnMonthly.style.display = 'flex';
    btnAnnual.style.display = 'none';
} else {
    monthlyButton.classList.remove('active');
    annualButton.classList.add('active');
    monthlyPrice.style.display = 'none';
    annualPrice.style.display = 'inline-block';                
    monthlyDescription.style.display = 'none';
    annualDescription.style.display = 'inline-block';
    titleMonthly.style.display = 'none';
    titleAnnual.style.display = 'block';
    btnMonthly.style.display = 'none';
    btnAnnual.style.display = 'flex';
}
}

monthlyButton.addEventListener("click", () => {
     toggleView("monthly");                          
})

annualButton.addEventListener("click", () => {
     toggleView("annual");                          
})
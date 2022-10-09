let billEl = document.querySelector('#bill');
let noOfPeopleEl = document.querySelector('#people');
let tipPercentages = document.querySelectorAll('.cl-tip');
let tipAmountPerPersonEl = document.querySelector('#tip-per-person');
let totalAmountPerPersonEl = document.querySelector('#total-per-person');
let tipCustom = document.querySelector(".cl-tip-custom")

let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;

billEl.addEventListener('keyup', (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});


noOfPeopleEl.addEventListener('keyup', (e) => {
  noOfPeople = Number(e.target.value);
  calculateTip();
});

tipCustom.addEventListener('type', (e) => {
  tipCustom = InputEvent(e,target.value);
  calculateTip();
})

Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.addEventListener('click', (e) => {
    if (e.target.innerText.includes('%')) {
      tipPercentage = Number(e.target.innerText.replace('%', ''));
      applyActiveClass(e.target.innerText);
      calculateTip();
    }
  });
});

function calculateTip() {

  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;
  let tipAmountPerPerson = tipAmount / noOfPeople;
  let totalAmountPerPerson = totalAmount / noOfPeople;

  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
  tipAmountPerPersonEl.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  totalAmountPerPersonEl.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

function applyActiveClass(innerTextPect) {
  Array.from(tipPercentages).forEach((tipPercentageEl) => {
      if (tipPercentageEl.innerText == innerTextPect) {
        tipPercentageEl.classList.add('active')
      } else {
        tipPercentageEl.classList.remove('active')
      }
  });
}

// function
let billEl = document.querySelector('#bill');
let noOfPeopleEl = document.querySelector('#people');
let tipPercentages = document.querySelectorAll('.cl-tip');
let tipAmountPerPersonEl = document.querySelector('#tip-per-person');
let totalAmountPerPersonEl = document.querySelector('#total-per-person');
let resetBtn = document.querySelector(".reset")

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

resetBtn.addEventListener('click', reset);


Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.addEventListener('click', (e) => {
    if (e.target.innerText.includes('%')) {
      tipPercentage = Number(e.target.innerText.replace('%', ''));
      applyActiveClass(e.target.innerText);
      calculateTip();
    }
  });
});
// function tipInputFun() {
//    tipValue = parseFloat(cl-tip-custom.value / 100);

//    tipCustom.forEach(function(vaL){
//     vaL.classList.remove("active");
//    });
// }   
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

function reset() {
  billEl = "0";
  billAmount()
  noOfPeopleEl = "1";
  noOfPeople()
  tipPercentages = "";
}

function noOfPeople() {
  if (noOfPeople == 0) {
    var content = document
    .querySelector(".content")
    .innerHTML;
    content = ("It cannot be" + 0 + "!");

    document
      .querySelector(".content")
      .innerHTML = content
  }
}

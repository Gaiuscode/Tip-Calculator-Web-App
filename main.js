let billEl = document.querySelector('#bill');
let noOfPeopleEl = document.querySelector('#people');
let tipPercentages = document.querySelectorAll('.cl-tip');
let tipAmountPerPersonEl = document.querySelector('#tip-per-person');
let totalAmountPerPersonEl = document.querySelector('#total-per-person');
let error = document.querySelector(".error")
let billInput = document.querySelector(".bill-input2")
let resetBtn = document.querySelector(".reset")

let billAmount = 0;
let noOfPeople = 1;
let tipPercentage = 0;


billEl.addEventListener('keyup', (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});


noOfPeopleEl.addEventListener('keyup', (e) => {
  noOfPeople = Number(e.target.value);
  if (noOfPeople < 1) {
    error.style.display ="flex"
    billInput.style.border ="thick solid red";
  } else {
    error.style.display ="none"
    billInput.style.border ="none";
  }
  calculateTip();
});

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


resetBtn.addEventListener("click", reset);

function reset() {
  billAmount.value = "0"; 
  billAmountFun ()
  noOfPeople.value = "1"
  noOfPeopleFun ()
}
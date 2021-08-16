function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const amountText = inputField.value;
  const amount = parseFloat(amountText);

  //clear deposit input field
  inputField.value = "";
  return amount;
}

function updateTotal(totalFieldId, amount) {
  //   debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const newTotal = parseFloat(totalText);

  totalElement.innerText = newTotal + amount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(balanceTotalText);
  return newBalanceTotal;
}
function balanceUpdate(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const newBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = newBalanceTotal + amount;
  } else {
    balanceTotal.innerText = newBalanceTotal - amount;
  }
}

// deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  //   const depositInput = document.getElementById("deposit");
  //   const depositAmountText = depositInput.value;

  //   const depositAmount = parseFloat(depositAmountText);

  // get Total deposit

  // update balance after withdrawl
  //   const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const newBalanceTotal = parseFloat(balanceTotalText);

  //   balanceTotal.innerText = newBalanceTotal + depositAmount;
  const depositAmount = getInputValue("deposit");
  if (depositAmount > 0) {
    updateTotal("deposit-total", depositAmount);
    balanceUpdate(depositAmount, true);
  }
});

// withdrawl button
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  //   const withdrawlInput = document.getElementById("withdrawl");
  //   const withdrawlAmountText = withdrawlInput.value;

  //   const withdrawlAmount = parseFloat(withdrawlAmountText);

  // get Total withdrawl
  //   const withdrawlTotal = document.getElementById("withdrawl-total");
  //   const withdrawlTotalText = withdrawlTotal.innerText;
  //   const newwithdrawlTotal = parseFloat(withdrawlTotalText);

  //   withdrawlTotal.innerText = newwithdrawlTotal + withdrawlAmount;

  // update balance after withdrawl
  //   const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const newBalanceTotal = parseFloat(balanceTotalText);

  //   balanceTotal.innerText = newBalanceTotal - withdrawlAmount;
  const withdrawlAmount = getInputValue("withdrawl");
  const currentBalance = getCurrentBalance();
  if (withdrawlAmount > 0 && withdrawlAmount < currentBalance) {
    updateTotal("withdrawl-total", withdrawlAmount);
    balanceUpdate(withdrawlAmount, false);
  }
  if (withdrawlAmount > currentBalance) {
    console.log("You do not have enough balance");
  }
});

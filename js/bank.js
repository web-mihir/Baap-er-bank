// Deposit function
document.getElementById('dep-btn').addEventListener('click', function () {
   let inpValue = getInputValue('dep-field');

   const totalDeposit = document.getElementById('total-deposit');
   let oldVal = getOldValue('total-deposit');

   let currBalance = getCurrentBalance();

   if (inpValue > 0) {
      const newDepositAmount = oldVal + inpValue;
      totalDeposit.innerText = newDepositAmount;
      updateBalance(currBalance, inpValue, true);
   } else {
      alert("Negative value are not allowed");
   }
});

// withdraw function
document.getElementById('withdraw-btn').addEventListener("click", function () {
   let inpValue = getInputValue("withdraw-field");

   const totalWithdrawDiv = document.getElementById('total-withdraw');
   let oldValue = getOldValue('total-withdraw');

   let currBalance = getCurrentBalance();

   if (inpValue < 0) {
      alert("Negative value are not allowed");
   } else if (inpValue > currBalance) {
      alert("You cann't withdraw money");
   } else {
      const totalWithdraw = oldValue + inpValue;
      totalWithdrawDiv.innerText = totalWithdraw;
      updateBalance(currBalance, inpValue, false);
   }
});

function getInputValue(inputId) {
   let inpId = document.getElementById(inputId);
   let val = inpId.value;
   inpId.value = '';
   return parseFloat(val);
}

function getOldValue(oldValueId) {
   let oldValId = document.getElementById(oldValueId);
   oldValId = oldValId.innerText;
   return parseFloat(oldValId);
}

function updateBalance(currentBalance, balance, isAdd) {
   let totalBalance = document.getElementById('total-balance');
   if (isAdd === true) {
      totalBalance.innerText = currentBalance + balance;
   } else {
      totalBalance.innerText = currentBalance - balance;
   }
}

function getCurrentBalance() {
   let totalBalance = document.getElementById('total-balance');
   let val = totalBalance.innerText;
   return parseFloat(val);
}
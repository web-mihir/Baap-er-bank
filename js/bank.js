// Deposit function
document.getElementById('dep-btn').addEventListener('click', function () {
   const depositeInputValue = document.getElementById('dep-field');
   const newDepositValue = depositeInputValue.value;
   const newDeposit = parseFloat(newDepositValue);

   const totalDeposit = document.getElementById('total-deposit');
   const oldDeposit = totalDeposit.innerText;
   const oldDepositAmount = parseFloat(oldDeposit);

   const newDepositAmount = oldDepositAmount + newDeposit;
   totalDeposit.innerText = newDepositAmount;

   // Update balance
   const totalBalanceDiv = document.getElementById('total-balance');
   const totalBalanceValue = totalBalanceDiv.innerText;
   let totalBalance = parseFloat(totalBalanceValue);
   let finalDepositBalance = totalBalance + newDeposit;

   totalBalanceDiv.innerText = finalDepositBalance;
});

// withdraw function
document.getElementById('withdraw-btn').addEventListener("click", function () {
   const withdrawInputField = document.getElementById("withdraw-field");
   const withdrawInputValue = withdrawInputField.value;
   const newWithdraw = parseFloat(withdrawInputValue);

   const totalWithdrawDiv = document.getElementById('total-withdraw');
   const totalWithdrawVal = totalWithdrawDiv.innerText;
   const oldWithdraw = parseFloat(totalWithdrawVal);

   const totalWithdraw = oldWithdraw + newWithdraw;
   totalWithdrawDiv.innerText = totalWithdraw;

   updateBalance(newWithdraw);
});

function updateBalance (balance) {
   const totalBalanceDiv = document.getElementById('total-balance');
   const totalBalanceValue = totalBalanceDiv.innerText;
   let totalBalance = parseFloat(totalBalanceValue);
   let finalDepositBalance = totalBalance - balance;
   totalBalanceDiv.innerText = finalDepositBalance;
}
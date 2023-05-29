document.getElementById('calculate').addEventListener('click', function() {
  var loanAmount = parseFloat(document.getElementById('loan-amount').value);
  var interestRate = parseFloat(document.getElementById('interest-rate').value);

  if (isNaN(loanAmount) || isNaN(interestRate)) {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
  } else {
    var monthlyRepayment = calculateMonthlyRepayment(loanAmount, interestRate);
    document.getElementById('result').textContent = 'Monthly Repayment: $' + monthlyRepayment.toFixed(2);
  }
});

function calculateMonthlyRepayment(loanAmount, interestRate) {
  var monthlyInterestRate = interestRate / 100 / 12;
  var numPayments = 12; // Assuming monthly payments for a year

  var numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments);
  var denominator = Math.pow(1 + monthlyInterestRate, numPayments) - 1;

  var monthlyRepayment = loanAmount * (numerator / denominator);
  return monthlyRepayment;
}

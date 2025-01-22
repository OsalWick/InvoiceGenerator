document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const interest = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseInt(document.getElementById('loanTerm').value);
    
    const monthlyPayment = (amount * interest * Math.pow(1 + interest, term)) / (Math.pow(1 + interest, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - amount;
    
    document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('totalPayment').textContent = totalPayment.toFixed(2);
    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
    
    document.getElementById('results').style.display = 'block';
}); 
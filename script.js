function addItem() {
    const container = document.getElementById('itemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    newRow.innerHTML = `
        <input type="text" placeholder="Item Description" required>
        <input type="number" placeholder="Quantity" min="1" required>
        <input type="number" placeholder="Unit Price" step="0.01" required>
        <button type="button" onclick="removeItem(this)">Remove</button>
    `;
    container.appendChild(newRow);
}

function removeItem(button) {
    const row = button.parentElement;
    if (document.getElementsByClassName('item-row').length > 1) {
        row.remove();
    }
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const clientName = document.getElementById('clientName').value;
    const orderType = document.getElementById('orderType').value;
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;
    
    // Update invoice display
    document.getElementById('displayInvoiceNumber').textContent = invoiceNumber;
    document.getElementById('displayDate').textContent = formatDate(new Date());
    document.getElementById('displayClientName').textContent = clientName;
    document.getElementById('displayOrderType').textContent = 
        orderType.charAt(0).toUpperCase() + orderType.slice(1) + ' Order';
    document.getElementById('displayPaymentType').textContent = paymentType;
    
    // Process items
    const itemsContainer = document.getElementById('itemsContainer');
    const invoiceItems = document.getElementById('invoiceItems');
    invoiceItems.innerHTML = '';
    
    let subtotal = 0;
    
    itemsContainer.querySelectorAll('.item-row').forEach(row => {
        const description = row.querySelector('input[type="text"]').value;
        const quantity = parseInt(row.querySelector('input[placeholder="Quantity"]').value);
        const unitPrice = parseFloat(row.querySelector('input[placeholder="Unit Price"]').value);
        const amount = quantity * unitPrice;
        subtotal += amount;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${description}</td>
            <td>${quantity}</td>
            <td>LKR ${unitPrice.toFixed(2)}</td>
            <td>LKR ${amount.toFixed(2)}</td>
        `;
        invoiceItems.appendChild(tr);
    });
    
    // Update totals
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = subtotal.toFixed(2);
    document.getElementById('amountDue').textContent = subtotal.toFixed(2);
    
    // Show invoice page
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('invoicePage').style.display = 'block';
});

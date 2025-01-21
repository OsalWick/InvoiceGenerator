function addItem() {
    const itemsContainer = document.getElementById('itemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    newRow.innerHTML = `
        <input type="text" placeholder="Item Description" required>
        <select class="size-select" required>
            <optgroup label="Adult Sizes">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
            </optgroup>
            <optgroup label="Baby Sizes">
                <option value="B-S">B-S</option>
                <option value="B-M">B-M</option>
                <option value="B-L">B-L</option>
                <option value="B-XL">B-XL</option>
                <option value="B-2XL">B-2XL</option>
            </optgroup>
        </select>
        <input type="number" placeholder="Quantity" min="1" required>
        <input type="number" placeholder="Unit Price" step="0.01" required>
        <button type="button" onclick="removeItem(this)" class="remove-btn">Remove</button>
    `;
    itemsContainer.appendChild(newRow);
}

function removeItem(button) {
    const itemsContainer = document.getElementById('itemsContainer');
    if (itemsContainer.children.length > 1) {
        button.parentElement.remove();
    } else {
        alert('At least one item is required');
    }
}

function formatCurrency(amount) {
    return parseFloat(amount).toFixed(2);
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const clientName = document.getElementById('clientName').value;
    const orderType = document.getElementById('orderType').value;
    const paymentType = document.getElementById('paymentType').value;
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    
    // Update invoice details
    document.getElementById('displayInvoiceNumber').textContent = invoiceNumber;
    document.getElementById('displayDate').textContent = formatDate(new Date());
    document.getElementById('displayOrderType').textContent = orderType;
    document.getElementById('displayPaymentType').textContent = paymentType;
    document.getElementById('displayClientName').textContent = clientName;
    
    // Process items
    const itemsContainer = document.getElementById('itemsContainer');
    const invoiceItems = document.getElementById('invoiceItems');
    invoiceItems.innerHTML = '';
    
    let subtotal = 0;
    let totalQty = 0;
    const items = Array.from(itemsContainer.children);
    
    // Add each item to the invoice
    items.forEach(row => {
        const inputs = row.getElementsByTagName('input');
        const sizeSelect = row.querySelector('.size-select');
        const description = inputs[0].value;
        const size = sizeSelect.value;
        const quantity = parseInt(inputs[1].value);
        const unitPrice = parseFloat(inputs[2].value);
        const amount = quantity * unitPrice;
        
        totalQty += quantity;
        subtotal += amount;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${description}</td>
            <td>${size}</td>
            <td>${quantity}</td>
            <td>LKR ${formatCurrency(unitPrice)}</td>
            <td>LKR ${formatCurrency(amount)}</td>
        `;
        invoiceItems.appendChild(tr);
    });
    
    // Calculate totals
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;
    const amountDue = total;
    
    // Update totals display
    document.getElementById('totalQuantity').textContent = totalQty;
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('discountAmount').textContent = formatCurrency(discountAmount);
    document.getElementById('total').textContent = formatCurrency(total);
    document.getElementById('amountDue').textContent = formatCurrency(amountDue);
    
    // Show invoice page and hide form
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('invoicePage').style.display = 'block';
});

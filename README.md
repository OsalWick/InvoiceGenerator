# Invoice Generator

A simple, browser-based invoice generation system that allows users to create and display professional invoices with dynamic item management.

## Features

- Dynamic invoice number generation
- Client information management
- Multiple order type selection
- Flexible payment type options
- Dynamic item row addition and removal
- Automatic calculations for subtotal and total amounts
- Professional invoice display format
- Responsive design
- Currency formatting in LKR (Sri Lankan Rupee)
- **Dynamic Calculations**
  - Automatic calculation of subtotals
  - Optional percentage-based discount system
  - Final total and amount due calculations
  - All monetary values in LKR (Sri Lankan Rupee)

## Usage

1. Fill in the invoice details:

   - Invoice number
   - Client name
   - Order type (dropdown selection)
   - Payment type (radio button selection)

2. Add items and discount:

   - Click "Add Item" to add new items
   - Enter item description, quantity, and unit price
   - Optionally enter a discount percentage
   - Remove items using the "Remove" button

3. Generate invoice:
   - Submit the form to generate a professional invoice
   - View the formatted invoice with all details and calculations
   - Print or save the invoice as needed

## Installation

1. Clone this repository:

```bash
git clone [repository-url]
```

2. Open the project directory:

```bash
cd invoice-generator
```

3. Open `index.html` in your web browser

## Technical Details

### Functions

#### `addItem()`

- Creates a new item row with input fields for description, quantity, and unit price
- Adds a remove button for each item
- Appends the new row to the items container

#### `removeItem(button)`

- Removes the selected item row
- Prevents removal if only one item remains
- Takes the button element as parameter

#### `formatDate(date)`

- Formats the current date in a readable format
- Returns date in "Month Day, Year" format

### Event Listeners

The form submission handler:

- Prevents default form submission
- Collects all form data
- Processes item details and calculations
- Updates the invoice display
- Toggles visibility between form and invoice

## Dependencies

This project is built using vanilla JavaScript and doesn't require any external libraries or frameworks.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Notes

- All monetary values are displayed in LKR (Sri Lankan Rupee)
- The system maintains at least one item row at all times
- Form validation ensures all required fields are filled
- Quantities must be whole numbers (minimum 1)
- Unit prices accept decimal values (step: 0.01)

## Future Improvements

1. Add print functionality
2. Implement save/load invoice features
3. Add customer database
4. Include company logo upload
5. Add multiple currency support
6. Implement invoice templates
7. Add tax calculation options
8. Include payment terms and due dates

### Calculations

- Subtotal: Sum of all item totals
- Discount: Applied as a percentage to the subtotal
- Total: Subtotal minus discount amount
- Amount due: Final amount to be paid

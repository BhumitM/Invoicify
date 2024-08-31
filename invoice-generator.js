document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('role');
    const userDetails = document.getElementById('userDetails');
    const paymentTypeSelect = document.getElementById('paymentType');
    const yearSection = document.getElementById('yearSection');
    const invoiceSection = document.getElementById('invoiceSection');
    const addRowButton = document.getElementById('addRow');
    const invoiceTableBody = document.querySelector('#invoiceTable tbody');

    roleSelect.addEventListener('change', function() {
        const role = this.value;
        if (role) {
            userDetails.style.display = 'block';
            if (role === 'faculty') {
                paymentTypeSelect.value = 'vendorPayment';
                paymentTypeSelect.disabled = true;
            } else {
                paymentTypeSelect.disabled = false;
            }
        } else {
            userDetails.style.display = 'none';
            paymentTypeSelect.disabled = false;
        }
    });

    paymentTypeSelect.addEventListener('change', function() {
        const paymentType = this.value;
        if (paymentType === 'universityFee') {
            yearSection.style.display = 'block';
        } else {
            yearSection.style.display = 'none';
            document.getElementById('year').value = '';
        }
    });

    document.getElementById('invoiceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const address = document.getElementById('address').value;
        const paymentType = document.getElementById('paymentType').value;
        const year = document.getElementById('year').value;

        document.getElementById('invoiceName').textContent = name;
        document.getElementById('invoiceMobile').textContent = mobile;
        document.getElementById('invoiceAddress').textContent = address;
        document.getElementById('invoicePaymentType').textContent = paymentType === 'universityFee' ? 'University Fee' : 'Vendor Payment';

        const yearSectionDisplay = document.getElementById('invoiceYear');
        if (paymentType === 'universityFee') {
            yearSectionDisplay.style.display = 'block';
            yearSectionDisplay.querySelector('span').textContent = year;
        } else {
            yearSectionDisplay.style.display = 'none';
        }

        invoiceSection.style.display = 'block';
    });

    addRowButton.addEventListener('click', function() {
        const description = document.getElementById('description').value;
        const noOfItems = document.getElementById('noOfItems').value;
        const amount = document.getElementById('amount').value;

        if (description && noOfItems && amount) {
            const rowCount = invoiceTableBody.rows.length + 1;

            const newRow = invoiceTableBody.insertRow();
            newRow.insertCell().textContent = rowCount;
            newRow.insertCell().textContent = description;
            newRow.insertCell().textContent = noOfItems;
            newRow.insertCell().textContent = `$${parseFloat(amount).toFixed(2)}`;

            document.getElementById('description').value = '';
            document.getElementById('noOfItems').value = '';
            document.getElementById('amount').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
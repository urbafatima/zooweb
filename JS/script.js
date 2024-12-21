document.querySelectorAll('.ticket-input').forEach(input => {
    input.addEventListener('input', updateTotal);
});

function updateTotal() {
    const adultPrice = 25;
    const childPrice = 15;
    const seniorPrice = 18;
    const familyPrice = 60;

    const adultCount = document.getElementById('adult').value;
    const childCount = document.getElementById('child').value;
    const seniorCount = document.getElementById('senior').value;
    const familyCount = document.getElementById('family').value;

    const adultTotal = adultPrice * adultCount;
    const childTotal = childPrice * childCount;
    const seniorTotal = seniorPrice * seniorCount;
    const familyTotal = familyPrice * familyCount;

    const total = adultTotal + childTotal + seniorTotal + familyTotal;

    document.querySelector('#summary-details').innerHTML = `
        <p>Adult Tickets: $${adultTotal}</p>
        <p>Child Tickets: $${childTotal}</p>
        <p>Senior Tickets: $${seniorTotal}</p>
        <p>Family Pack: $${familyTotal}</p>
        <h4>Total: $${total}</h4>
    `;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert("Proceeding to Checkout");
    // Here you would normally redirect to a payment page or integrate with a payment system
});
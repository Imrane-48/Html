document.addEventListener('DOMContentLoaded', function() {
    function updateTotalPrice() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            total += quantity * price;
        });
        document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
    }
    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
        const increaseButton = item.querySelector('.quantity-increase');
        const decreaseButton = item.querySelector('.quantity-decrease');
        const removeButton = item.querySelector('.remove-button');
        const likeButton = item.querySelector('.like-button');
        increaseButton.addEventListener('click', () => {
            const quantitySpan = item.querySelector('.quantity');
            quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
            updateTotalPrice();
        });
        decreaseButton.addEventListener('click', () => {
            const quantitySpan = item.querySelector('.quantity');
            if (parseInt(quantitySpan.textContent) > 1) {
                quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
                updateTotalPrice();
            }
        });
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });
    updateTotalPrice();
});
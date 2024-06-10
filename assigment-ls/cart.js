document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function renderCart() {
      cartList.innerHTML = '';
      if (cart.length === 0) {
        cartList.innerHTML = '<p>No items in the cart.</p>';
        return;
      }
      cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p>${user.email}</p>
          <button onclick="deleteFromCart(${user.id})">Delete</button>
        `;
        cartList.appendChild(userCard);
      });
    }
  
    window.deleteFromCart = function(id) {
      const userIndex = cart.findIndex(u => u.id === id);
      if (userIndex > -1) {
        const user = cart.splice(userIndex, 1)[0];
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${user.name} removed from cart`);
        renderCart();
      }
    }
  
    renderCart();
  });
  
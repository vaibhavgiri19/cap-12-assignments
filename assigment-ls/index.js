const users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById('user-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function renderUsers() {
      userList.innerHTML = '';
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p>${user.email}</p>
          <button onclick="addToCart(${user.id})">Add to Cart</button>
        `;
        userList.appendChild(userCard);
      });
    }
  
    window.addToCart = function(id) {
      const user = users.find(u => u.id === id);
      if (!cart.some(u => u.id === id)) {
        cart.push(user);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${user.name} added to cart`);
      } else {
        alert(`${user.name} is already in the cart`);
      }
    }
  
    renderUsers();
  });
  
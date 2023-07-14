// Lấy dữ liệu từ query parameters
const urlParams = new URLSearchParams(window.location.search);
const cartData = urlParams.get('cart');

// Chuyển đổi dữ liệu thành đối tượng giỏ hàng
const cart = JSON.parse(decodeURIComponent(cartData));

function displayCart2(){
    const cartItemsElement = document.querySelector('.cart-items');

    cart.forEach(item => {
        console.log("hello")
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `  <img src = "${item.img}"> <span>${item.name} - Giá: $${item.price} - Số lượng: ${item.quantity}</span> `;
      cartItemsElement.appendChild(cartItemElement);
    });
   
  }
  displayCart2()

  console.log(cart)
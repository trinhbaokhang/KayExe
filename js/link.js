

const cart=  JSON.parse(localStorage.getItem('cart'));
console.log(cart)
// Xóa dữ liệu từ localStorage sau khi sử dụng (nếu cần)
localStorage.removeItem('cart'); 

function displayCart2(){
    const cartItemsElement = document.querySelector('.cart-items2');

    cart.forEach(item => {
        console.log("hello")
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item2');
      cartItemElement.innerHTML = ` <div class = "form-img-item"><img class="img-item2" src = "${item.img}"> <span>${item.name} - Giá: $${item.price} - Số lượng: ${item.quantity}</span></div>   `;
      cartItemsElement.appendChild(cartItemElement);
    });
   
  }
  displayCart2()

  console.log(cart)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref as dbRef, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCBwJftKjEhUxB6KPyOTdvfEaHzBMhV0Rk",
    authDomain: "final-bd5b7.firebaseapp.com",
    databaseURL: "https://final-bd5b7-default-rtdb.firebaseio.com",
    projectId: "final-bd5b7",
    storageBucket: "final-bd5b7.appspot.com",
    messagingSenderId: "106863198123",
    appId: "1:106863198123:web:aa9e1f61ce5d451108dcee",
    measurementId: "G-HMB88KPL1S"
};

initializeApp(firebaseConfig);

const database = getDatabase();
const databaseRef = dbRef(database, "products");
const productList = document.getElementById("productList");

// Hàm lấy danh sách sản phẩm từ Firebase
function getProducts() {
    onValue(databaseRef, (snapshot) => {
        productList.innerHTML = ""; // Xóa danh sách sản phẩm cũ

        snapshot.forEach((childSnapshot) => {
            const productData = childSnapshot.val();
            const productItem = createProductItem(productData);
            productList.appendChild(productItem);
        });
    });
}

// Hàm tạo phần tử HTML cho một sản phẩm
function createProductItem(productData) {
    const { name, id, price, image } = productData;

    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const imageElement = document.createElement("img");
    productItem.classList.add("img-item");
    imageElement.src = image;
    imageElement.alt = name;
    productItem.appendChild(imageElement);

    const nameElement = document.createElement("h2");
    productItem.classList.add("h-item");
    nameElement.textContent = name;
    productItem.appendChild(nameElement);

    // const idElement = document.createElement("p");
    // idElement.textContent = "ID: " + id;
    // productItem.appendChild(idElement);

    const priceElement = document.createElement("h4");
    productItem.classList.add("p-item");
    priceElement.textContent = "Giá: " + price + "đ";
    productItem.appendChild(priceElement);

    const productbutton = document.createElement("button");
    productbutton.textContent = "Mua hàng " ;3
    productItem.appendChild(productbutton)
    productItem.classList.add("buy-item");


    return productItem;
}

// Gọi hàm để lấy danh sách sản phẩm
getProducts();








let openShopping = document.querySelector('#shopping-img');
let  closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');

openShopping.addEventListener('click', ()=>{
      var sidebar = document.querySelector('.cart');
      sidebar.classList.add('open'); 
})
closeShopping.addEventListener('click', ()=>{

  var sidebar =document.querySelector('.cart')
  sidebar.classList.remove('open')
    
})

// Hàm chạy khi các phần tử đã được tạo hoàn tất
function onElementsCreated() {
  const buyButtons = document.querySelectorAll('.buy-item');
  console.log(buyButtons);

  // Lặp qua từng nút và thêm sự kiện click
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Lấy thông tin sản phẩm từ các phần tử con của nút
      const productItem = button.querySelector('h2').textContent;
      const priceText = button.querySelector('h4').textContent;
      const price = parseInt(priceText.replace(/[^0-9]/g, ''));
      

      // Thực hiện các hành động khác với thông tin sản phẩm
      console.log('Sản phẩm:', productItem);
      console.log('Giá:', price);

      // Gọi hàm addToCart với thông tin sản phẩm
      addToCart(productItem, price);
    });
  });
}

// Tạo một observer để theo dõi thay đổi trong DOM
const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Kiểm tra nếu các phần tử có class "buy-item" đã được tạo hoàn tất
      const buyItems = document.querySelectorAll('.buy-item');
      if (buyItems.length > 0) {
        // Hủy bỏ việc theo dõi
        observer.disconnect();

        // Gọi hàm khi các phần tử đã được tạo hoàn tất
        onElementsCreated();
        break;
      }
    }
  }
});



// Bắt đầu theo dõi thay đổi trong DOM
observer.observe(document.body, { childList: true, subtree: true });
let cart=[];
function addToCart(productName, price) {
  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    // Nếu đã tồn tại, tăng số lượng
    existingProduct.quantity += 1;
  } else {
    // Nếu chưa tồn tại, thêm sản phẩm vào giỏ hàng
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  // Cập nhật giỏ hàng trên giao diện
  displayCart();
}
function displayCart(){
  const cartItemsElement = document.getElementById('cart-items');

  const cartTotalElement = document.getElementById('cart-total');
  cartItemsElement.innerHTML=``;
  cart.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `<span>${item.name} - Giá: $${item.price} - Số lượng: ${item.quantity}</span>`;
    cartItemsElement.appendChild(cartItemElement);
  });
  const total = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
  cartTotalElement.innerHTML = `<h3>Tổng : $${total}</h3>`;
}


var checklogin = window.localStorage.getItem('checklogin');


if(checklogin == '1'){
    var name = window.localStorage.getItem('name');
    var dkdn1 = document.querySelector('.dk-dn1')
    var dkdn2 = document.querySelector('.dk-dn2')
    const dangxuat3 = document.querySelector('.ph');
    var dangxuat = document.createElement('a')
    dangxuat.innerHTML = "  Đăng xuất"
    dangxuat.classList.add("dangxuat-item");
    dangxuat3.appendChild(dangxuat);
    dkdn1.innerHTML = name
    dkdn2.innerHTML = ""
    console.log(name)
}

const dangxuat2 =  document.querySelector('.dangxuat-item')
 dangxuat2.addEventListener('click,', () => {
  window.localStorage.setItem('checklogin', '0')
  window.location.href="index.html"
 
})
  
console.log(dangxuat2)
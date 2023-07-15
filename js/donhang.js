import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCBwJftKjEhUxB6KPyOTdvfEaHzBMhV0Rk",
    authDomain: "final-bd5b7.firebaseapp.com",
    projectId: "final-bd5b7",
    storageBucket: "final-bd5b7.appspot.com",
    messagingSenderId: "106863198123",
    appId: "1:106863198123:web:aa9e1f61ce5d451108dcee",
    measurementId: "G-HMB88KPL1S"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const orderListElement = document.getElementById('order-list');

// Lấy danh sách đơn hàng từ Firestore
async function getOrderList() {
  orderListElement.innerHTML = '';

  try {
    const querySnapshot = await getDocs(collection(db, 'orders'));
    querySnapshot.forEach((doc) => {
      const order = doc.data();
      const orderItemElement = createOrderItemElement(order, doc.id);
      orderListElement.appendChild(orderItemElement);
    });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách đơn hàng:', error);
  }
}

// Tạo phần tử HTML cho một đơn hàng
function createOrderItemElement(order, orderId) {
  const orderItemElement = document.createElement('li');
  
  orderItemElement.innerHTML = `
  <div  class = "baoquanh">
  <h3>ID đơn hàng: ${orderId}</h3>
  <h3 class = "styh3">Ngày đặt hàng: ${order.timestamp.toDate().toLocaleString()}</h3>
  <ul class="ul" >
    ${order.orderItems.map(item => `<li class="li">${item.name} - Giá: $${item.price} - Số lượng: ${item.quantity}</li>`).join('')}
  </ul>
  </div>
   
  `;
  return orderItemElement;
}

// Xóa một đơn hàng
async function deleteOrder(orderId) {
  try {
    await deleteDoc(doc(db, 'orders', orderId));
    getOrderList(); // Cập nhật lại danh sách đơn hàng sau khi xóa
  } catch (error) {
    console.error('Lỗi khi xóa đơn hàng:', error);
  }
}

// Gọi hàm getOrderList để hiển thị danh sách đơn hàng khi trang được tải
getOrderList();
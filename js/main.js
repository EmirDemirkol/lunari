/************************************
 * LOGIN PAGE JS
 ************************************/

function handleFakeLogin(event) {
  event.preventDefault();
  const nameInput = document.getElementById('email');
  const displayName = (nameInput && nameInput.value) || 'Guest';

  localStorage.setItem('novariUserName', displayName);

  alert('Login prototype only. You are logged in as ' + displayName + '.');
  window.location.href = 'index.html';
}

window.handleFakeLogin = handleFakeLogin;

/************************************
 * SIGNUP PAGE JS
 ************************************/


/************************************
 * Utility: nav login label
 ************************************/

document.addEventListener('DOMContentLoaded', () => {
  const navLoginLabel = document.getElementById('navLoginLabel');
  if (navLoginLabel) {
    const path = window.location.pathname;
    if (path.includes('signup')) {
      navLoginLabel.textContent = 'Signup';
    } else {
      navLoginLabel.textContent = 'Login';
    }
  }
});



// ========= PRODUCT DATA =========
const LUNARI_PRODUCTS = {
  'luxe-tennis-bracelet': {
    id: 'luxe-tennis-bracelet',
    name: 'Luxe Tennis Bracelet',
    price: 79.99,
    image: 'images/Lunari Moseinate bracelet.png'
  },
  'helios-cuban-chain': {
    id: 'helios-cuban-chain',
    name: 'Helios Cuban Chain',
    price: 74.99,
    image: 'images/Lunari Cuban Link Chain.png'
  },
  'solace-cross-pendant': {
    id: 'solace-cross-pendant',
    name: 'Solace Cross Pendant',
    price: 59.99,
    image: 'images/Lunari Cross Pendant.png'
  },
  'atlast-signet-ring': {
    id: 'atlast-signet-ring',
    name: 'Atlast Cross Signet Ring',
    price: 89.99,
    image: 'images/Lunari Signet Ring.png'
  },
  'celeste-arabic-pendant': {
    id: 'celeste-arabic-pendant',
    name: 'Celeste Arabic Pendant',
    price: 59.99,
    image: 'images/Lunari Noor Pendant.png'
  },
  'obsidian-chrono-watch': {
    id: 'obsidian-chrono-watch',
    name: 'Obsidian Chrono Watch',
    price: 189.99,
    image: 'images/Lunari Timeless Watch.png'
  },
  'shopify-pendant': {
    id: 'shopify-pendant',
    name: 'Shopify Pendant',
    price: 69.99,
    image: 'images/Lunari Shopify Pendant.png'
  },
  'halo-tennis-bracelet': {
    id: 'halo-tennis-bracelet',
    name: 'Halo Tennis Bracelet',
    price: 54.99,
    image: 'images/Lunari Mixed Cut Bracelet.png'
  },
  'red-light-glasses': {
    id: 'red-light-glasses',
    name: 'Lunari Red Light Glasses',
    price: 49.99,
    image: 'images/Lunari Red Light Glassesss.png'
  },
  'aura-sunglasses': {
    id: 'aura-sunglasses',
    name: 'Lunari Aura Sunglasses',
    price: 59.99,
    image: 'images/Lunari Designer Branded Glasse.png'
  },
  'flat-link-chain': {
    id: 'flat-link-chain',
    name: 'Flat Link Chain',
    price: 84.99,
    image: 'images/Lunari Women\'s Necklace Gold.png'
  },
  'argent-skeleton-watch': {
    id: 'argent-skeleton-watch',
    name: 'Argent Skeleton Watch',
    price: 219.99,
    image: 'images/Lunara Skeleton Watch.png'
  },
  'lunar-knot-ring': {
    id: 'lunar-knot-ring',
    name: 'Lunar Knot Ring',
    price: 79.99,
    image: 'images/Lunari Interwoven Band Ring.png'
  },
  'nail-bangle': {
    id: 'nail-bangle',
    name: 'Nail Bangle Bracelet',
    price: 69.99,
    image: 'images/Lunari Women Nail Bracelet Branded.png'
  },
  'clover-malachite-earrings': {
    id: 'clover-malachite-earrings',
    name: 'Clover Malachite Earrings',
    price: 79.99,
    image: 'images/Lunara Malachite Earrings.png'
  },
  'pave-dagger-pendant': {
    id: 'pave-dagger-pendant',
    name: 'Pav\u00e9 Dagger Pendant',
    price: 69.99,
    image: 'images/Lunari Women\'s Dagger Pendant.png'
  }
};

// ========= CART HELPERS (localStorage) =========
function getCart() {
  return JSON.parse(localStorage.getItem('lunariCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('lunariCart', JSON.stringify(cart));
}

function addToCart(productId) {
  const product = LUNARI_PRODUCTS[productId];
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
}

// ========= PRODUCTS PAGE =========
function initProductsPage() {
  const buttons = document.querySelectorAll('[data-product-id]');
  if (!buttons.length) return; 

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-product-id');
      addToCart(id);
      btn.textContent = 'Added!';
      setTimeout(() => (btn.textContent = 'Add to cart'), 800);
    });
  });
}

// ========= CHECK OUT FORM =========

function initCheckoutPage() {
  const form = document.getElementById('checkout-form') || document.querySelector('.checkout-card form');
  if (!form) return; 

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your order!');


  localStorage.removeItem('lunariCart');

  });
}

/************************************
 * HOME PAGE SLIDESHOW
 ************************************/

let lunariSlideIndex = 1;

function showSlide(n) {
  const slides = document.querySelectorAll('.slideshow-item');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return; 

  if (n > slides.length) lunariSlideIndex = 1;
  if (n < 1) lunariSlideIndex = slides.length;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[lunariSlideIndex - 1].classList.add('active');
  if (dots[lunariSlideIndex - 1]) {
    dots[lunariSlideIndex - 1].classList.add('active');
  }
}

function changeSlide(step) {
  showSlide(lunariSlideIndex += step);
}

function currentSlide(n) {
  showSlide(lunariSlideIndex = n);
}


window.changeSlide = changeSlide;
window.currentSlide = currentSlide;






// ========= CART PAGE =========
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage(); 
}

function renderCartPage() {
  const cartItemsEl = document.querySelector('.cart-items');
  if (!cartItemsEl) return; 

  const subtotalEl = document.querySelector('[data-summary="subtotal"]');
  const totalEl = document.querySelector('[data-summary="total"]');

  const cart = getCart();
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if (!cart.length) {
    cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;

      const article = document.createElement('article');
      article.className = 'cart-item';
      article.innerHTML = `
        <a class="cart-thumb" href="product.html" aria-label="${item.name}">
          <img src="${item.image}" alt="${item.name}">
        </a>
        <div class="cart-info">
          <div class="cart-line">
            <h3 class="cart-title">${item.name}</h3>
            <p class="cart-price">€${item.price.toFixed(2)}</p>
          </div>
          <p class="cart-meta">Qty: ${item.qty}</p>
          <button class="link-btn" type="button" data-remove-id="${item.id}">Remove</button>
        </div>
      `;
      cartItemsEl.appendChild(article);
    });
  }

  const formatted = '€' + subtotal.toFixed(2);
  if (subtotalEl) subtotalEl.textContent = formatted;
  if (totalEl) totalEl.textContent = formatted;

  
  cartItemsEl.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove-id');
      removeFromCart(id);
    });
  });
}

// ========= INIT ON EVERY PAGE =========
document.addEventListener('DOMContentLoaded', () => {
  initProductsPage();
  renderCartPage();
  initCheckoutPage();
  showSlide(lunariSlideIndex);
});

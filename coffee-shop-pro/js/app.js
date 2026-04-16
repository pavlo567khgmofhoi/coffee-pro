//Підє'днав JS З продукцією
import products from './products.js';


const sectionCenter = document.querySelector('.menu-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cart-btn');
const cartOverlay = document.querySelector('.cart-overlay');
const closeCartBtn = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartTotalElement = document.querySelector('.cart-total');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const preloader = document.querySelector('.preloader');
const toastContainer = document.getElementById('toast-container');

// Застосування промокоду
const promoInput = document.getElementById('promo-input');
const applyPromoBtn = document.getElementById('apply-promo');
const promoMessage = document.getElementById('promo-message');

// Оформлення замовлення
const checkoutBtn = document.getElementById('checkout-btn');
const modalOverlay = document.getElementById('order-modal');
const closeModalBtn = document.getElementById('close-modal-btn');


let cart = JSON.parse(localStorage.getItem('CART')) || [];
let discount = 0;


window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});


window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(products); 
    initTypewriter();           
    renderCartItems();       
    updateCartValues();         
    loadTheme();                
});

window.addEventListener('resize', updateMascotPositions);


// перемикач темної і світлої теми
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    // Збереження вибору користувача у LocalStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
}


// Пошукза ключовими словами коли вводиш текст
searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(value) || 
        product.desc.toLowerCase().includes(value)
    );
    displayMenuItems(filtered); 
    setTimeout(updateMascotPositions, 100);
});

function displayMenuItems(menuItems) {
    // Пошук та фільтрації
    if (menuItems.length === 0) {
        sectionCenter.innerHTML = `<h3 style="text-align:center; width:100%;">Нічого не знайдено 😢</h3>`;
        return;
    }

 
    let displayMenu = menuItems.map(function (item) {
        // КБЖВ
        const kcal = 100 + (item.id * 5) % 300; 
        const proteins = 2 + (item.id * 2) % 10;
        const fats = 5 + (item.id * 3) % 15;

     
        return `<article class="menu-item">
              <div class="coffee-bean-mascot" onclick="mascotClick(event, this)">
                <svg viewBox="0 0 150 150" width="100%" height="100%">
                    <ellipse cx="75" cy="75" rx="40" ry="55" fill="#4e342e" stroke="#2d1e1a" stroke-width="3"/>
                    <path d="M75 30 Q55 55 75 75 T75 120" fill="none" stroke="#2d1e1a" stroke-width="3" stroke-linecap="round"/>
                    <g class="normal-face">
                        <circle cx="60" cy="65" r="5" fill="white"/><circle cx="60" cy="65" r="2" fill="black"/>
                        <circle cx="90" cy="65" r="5" fill="white"/><circle cx="90" cy="65" r="2" fill="black"/>
                        <path d="M65 85 Q75 95 85 85" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </g>
                    <g class="laughing-face">
                        <path d="M55 65 Q60 60 65 65" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M85 65 Q90 60 95 65" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M60 85 Q75 100 90 85 Z" fill="white" stroke="white" stroke-width="1"/>
                    </g>
                    <g class="bean-hand-right"><path d="M110 75 Q130 60 140 40" fill="none" stroke="#4e342e" stroke-width="6" stroke-linecap="round"/><circle cx="140" cy="40" r="8" fill="#4e342e"/></g>
                    <g class="bean-hand-left"><path d="M40 75 Q20 60 10 40" fill="none" stroke="#4e342e" stroke-width="6" stroke-linecap="round"/><circle cx="10" cy="40" r="8" fill="#4e342e"/></g>
                </svg>
              </div>
              <div class="img-container"><img src="${item.img}" class="photo" alt="${item.title}" /></div>
              <div class="item-info">
                <header class="item-header"><h4>${item.title}</h4><h4 class="price">${item.price} грн</h4></header>
                <p class="item-text">${item.desc}</p>
                <div class="nutrition-info">
                    <div class="nutrition-item"><div class="kcal-circle">${kcal}</div><span>ккал</span></div>
                    <div class="nutrition-item"><span>${proteins} г</span><span>білки</span></div>
                    <div class="nutrition-item"><span>${fats} г</span><span>жири</span></div>
                </div>
                <div class="reactions">
                    <button class="reaction-btn" onclick="toggleReaction(this)">😋</button>
                    <button class="reaction-btn" onclick="toggleReaction(this)">🤔</button>
                    <button class="reaction-btn" onclick="toggleReaction(this)">❤️</button>
                </div>
                 <button class="add-to-cart-btn" onclick="addToCart(${item.id})">У КОШИК</button>
              </div>
            </article>`;
    });
    
   
    sectionCenter.innerHTML = displayMenu.join("");
    initScrollObserver();
    setTimeout(updateMascotPositions, 100);
}

// Додавання товару до кошика
window.addToCart = function(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    // Додавання або віднімання товару в кошику
    if (existing) existing.amount++; else cart.push({ ...item, amount: 1 });
    
    saveCart(); updateCartValues(); renderCartItems(); showToast(`${item.title} додано!`);
    
    // Анімація вібрації кнопки кошика при додаванні товару
    const btn = document.getElementById('cart-btn');
    btn.classList.add('shake');
    setTimeout(() => btn.classList.remove('shake'), 500);
}

window.increaseItem = function(id) {
    cart.find(i => i.id === id).amount++;
    saveCart(); updateCartValues(); renderCartItems();
}

window.decreaseItem = function(id) {
    const item = cart.find(i => i.id === id);
    item.amount--;
    if (item.amount === 0) removeItem(id); else { saveCart(); updateCartValues(); renderCartItems(); }
}

// Видалення товару з кошика за його ідентифікатором
window.removeItem = function(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart(); updateCartValues(); renderCartItems();
}


// Промокоді для знижки та обробник події кліку по кнопці застосування
applyPromoBtn.addEventListener('click', () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === 'STUDENT') {
        discount = 0.1; promoMessage.style.color = 'green'; promoMessage.innerText = "Знижка студента 10%!";
    } else if (code === 'COFFEE') {
        discount = 0.2; promoMessage.style.color = 'green'; promoMessage.innerText = "Супер знижка 20%!";
    } else {
        discount = 0; promoMessage.style.color = 'red'; promoMessage.innerText = "Невірний код";
    }
    updateCartValues();
});

// Обчислення загальної вартості товарів
function updateCartValues() {
    let total = 0, count = 0;
    cart.forEach(i => { total += i.price * i.amount; count += i.amount; });
    let finalPrice = total - (total * discount);
    cartTotalElement.innerText = Math.round(finalPrice);
    cartBtn.innerText = `Кошик (${count})`;
}


function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart-msg"><h3>🛒</h3><p>Тут порожньо...</p></div>`; return;
    }
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item-row');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="cart-info"><h4>${item.title}</h4><h5>${item.price} грн</h5>
            <span class="remove-btn" onclick="removeItem(${item.id})">Видалити</span></div>
            <div class="item-amount-controls">
                <button class="amount-btn" onclick="increaseItem(${item.id})">▲</button>
                <p class="item-amount">${item.amount}</p>
                <button class="amount-btn" onclick="decreaseItem(${item.id})">▼</button>
            </div>`;
        cartItemsContainer.appendChild(div);
    });
}

// Спливаючі сповіщення 
function showToast(text) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `✅ ${text}`;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000); // Очищення DOM після показу
}

// Підтвердження замовлення
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) alert("Кошик порожній!"); 
    else { modalOverlay.classList.add('open'); hideCart(); cart = []; saveCart(); updateCartValues(); renderCartItems(); }
});
closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));

// Управління видимості бічної панелі кошика
function showCart() { cartOverlay.classList.add('open'); }
function hideCart() { cartOverlay.classList.remove('open'); }
cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);

// Збереження кошика
function saveCart() { localStorage.setItem('CART', JSON.stringify(cart)); }


// Обробник кліку по маскоту з + CSS-класу 
window.mascotClick = function(e, t) { t.classList.add('is-laughing'); createStars(e.clientX, e.clientY); setTimeout(() => t.classList.remove('is-laughing'), 1000); }

function createStars(x, y) {
    for (let i = 0; i < 10; i++) {
        const s = document.createElement('div'); s.classList.add('star'); document.body.appendChild(s);
        s.style.left = `${x}px`; s.style.top = `${y}px`;
        
        s.style.setProperty('--tx', `${(Math.random()-0.5)*200}px`); s.style.setProperty('--ty', `${(Math.random()-0.5)*200}px`);
        s.style.animation = `starExplode 0.8s ease-out forwards`;
        setTimeout(() => s.remove(), 800); 
    }
}

// Розрахунок позиції картки 
function updateMascotPositions() {
    const items = document.querySelectorAll('.menu-item'); if(!items.length) return;
    const pos = Array.from(new Set([...items].map(i => i.getBoundingClientRect().left))).sort((a,b)=>a-b);
    items.forEach(i => {
        i.classList.remove('pos-left', 'pos-middle', 'pos-right');
        const idx = pos.indexOf(i.getBoundingClientRect().left);
        if(pos.length===1) i.classList.add('pos-right');
        else if(pos.length===2) i.classList.add(idx===0?'pos-left':'pos-right');
        else i.classList.add(idx===0?'pos-left':(idx===pos.length-1?'pos-right':'pos-middle'));
    });
}

// Ефект (друку) 
function initTypewriter() {
    const el = document.querySelector('.hero h2'); if(!el) return;
    const txt = ["Код та Кава", "Енергія для ІТ", "Смакуй момент"];
    let c=0, i=0, l="";
    (function type() { if(c===txt.length)c=0; l=txt[c].slice(0,++i); el.innerHTML=`<span>${l}</span>`; 
    if(l.length===txt[c].length){c++;i=0;setTimeout(type,2000)}else setTimeout(type,100) })();
}


function initScrollObserver() {
    const obs = new IntersectionObserver(e => e.forEach(x => { if(x.isIntersecting) x.target.classList.add('show') }));
    document.querySelectorAll('.menu-item').forEach(el => obs.observe(el));
}


filterBtns.forEach(btn => btn.addEventListener('click', e => {
    const cat = e.currentTarget.dataset.id;
    const filtered = products.filter(i => i.category === cat);
    displayMenuItems(cat === 'all' ? products : filtered);
    setTimeout(updateMascotPositions, 100);
}));

// Емодзі кнопок
window.toggleReaction = function(btn) {
    if(btn.classList.contains('active')) btn.classList.remove('active');
    else { btn.parentElement.querySelectorAll('.reaction-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
}
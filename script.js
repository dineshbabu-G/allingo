/* =========================================================
   ALLINGO — script.js
   Vanilla JS e-commerce logic
========================================================= */

/* ===================== PRODUCT DATA ===================== */
const PRODUCTS = [
  // ---------------- MEN ----------------
  { id:"m-shirt-1", category:"MEN", sub:"Shirts", name:"Men Slim Fit Checked Shirt", desc:"100% cotton, breathable, ideal for office wear", price:799, mrp:1599, rating:4.3, img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" },
  { id:"m-shirt-2", category:"MEN", sub:"Shirts", name:"Men Formal White Shirt", desc:"Premium cotton blend, wrinkle resistant", price:899, mrp:1799, rating:4.5, img:"https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&q=80" },
  { id:"m-pant-1", category:"MEN", sub:"Pants", name:"Men Slim Fit Chinos", desc:"Stretchable fabric, all-day comfort", price:999, mrp:1999, rating:4.2, img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80" },
  { id:"m-pant-2", category:"MEN", sub:"Pants", name:"Men Formal Trousers", desc:"Slim fit, machine washable", price:1099, mrp:2199, rating:4.1, img:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80" },
  { id:"m-tshirt-1", category:"MEN", sub:"T-Shirts", name:"Men Round Neck T-Shirt", desc:"Soft cotton, regular fit, everyday wear", price:399, mrp:899, rating:4.4, img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
  { id:"m-tshirt-2", category:"MEN", sub:"T-Shirts", name:"Men Graphic Print T-Shirt", desc:"Trendy print, breathable fabric", price:449, mrp:999, rating:4.0, img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
  { id:"m-inner-1", category:"MEN", sub:"Inner Wear", name:"Men Cotton Briefs (Pack of 3)", desc:"Breathable, soft elastic waistband", price:349, mrp:699, rating:4.2, img:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80" },
  { id:"m-foot-1", category:"MEN", sub:"Footwear", name:"Men Running Sports Shoes", desc:"Lightweight sole, mesh upper for ventilation", price:1499, mrp:2999, rating:4.5, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
  { id:"m-foot-2", category:"MEN", sub:"Footwear", name:"Men Casual Sneakers", desc:"Durable sole, everyday street style", price:1299, mrp:2599, rating:4.3, img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80" },
  { id:"m-watch-1", category:"MEN", sub:"Watches", name:"Men Analog Chronograph Watch", desc:"Stainless steel strap, water resistant", price:1899, mrp:3999, rating:4.4, img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80" },
  { id:"m-acc-1", category:"MEN", sub:"Accessories", name:"Men Leather Wallet", desc:"Genuine leather, multiple card slots", price:599, mrp:1199, rating:4.1, img:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80" },

  // ---------------- WOMEN ----------------
  { id:"w-shirt-1", category:"WOMEN", sub:"Shirts", name:"Women Casual Cotton Shirt", desc:"Relaxed fit, breathable fabric", price:699, mrp:1399, rating:4.3, img:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80" },
  { id:"w-shirt-2", category:"WOMEN", sub:"Shirts", name:"Women Striped Office Shirt", desc:"Formal wear, slim tailored fit", price:849, mrp:1699, rating:4.2, img:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500&q=80" },
  { id:"w-pant-1", category:"WOMEN", sub:"Pants", name:"Women High-Waist Trousers", desc:"Stretch fabric, tapered fit", price:949, mrp:1899, rating:4.4, img:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80" },
  { id:"w-tshirt-1", category:"WOMEN", sub:"T-Shirts", name:"Women Round Neck T-Shirt", desc:"Soft cotton blend, casual everyday fit", price:399, mrp:799, rating:4.3, img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80" },
  { id:"w-tshirt-2", category:"WOMEN", sub:"T-Shirts", name:"Women Oversized T-Shirt", desc:"Trendy boxy fit, premium cotton", price:499, mrp:999, rating:4.1, img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80" },
  { id:"w-inner-1", category:"WOMEN", sub:"Inner Wear", name:"Women Cotton Bra Set", desc:"Soft, comfortable everyday wear", price:599, mrp:1199, rating:4.0, img:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=500&q=80" },
  { id:"w-foot-1", category:"WOMEN", sub:"Footwear", name:"Women Casual Sneakers", desc:"Lightweight, cushioned sole", price:1199, mrp:2399, rating:4.4, img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
  { id:"w-foot-2", category:"WOMEN", sub:"Footwear", name:"Women Block Heel Sandals", desc:"Comfortable block heel, party wear", price:1099, mrp:2199, rating:4.2, img:"https://images.unsplash.com/photo-1561808843-09cdcb6f8b1c?w=500&q=80" },
  { id:"w-watch-1", category:"WOMEN", sub:"Watches", name:"Women Rose Gold Analog Watch", desc:"Elegant slim dial, stainless strap", price:1699, mrp:3399, rating:4.5, img:"https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&q=80" },
  { id:"w-acc-1", category:"WOMEN", sub:"Accessories", name:"Women Tote Handbag", desc:"Spacious, vegan leather finish", price:899, mrp:1799, rating:4.3, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" },

  // ---------------- KIDS ----------------
  { id:"k-shirt-1", category:"KIDS", sub:"Shirts", name:"Kids Cotton Check Shirt", desc:"Soft cotton, comfortable for daily wear", price:499, mrp:999, rating:4.3, img:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80" },
  { id:"k-pant-1", category:"KIDS", sub:"Pants", name:"Kids Cargo Pants", desc:"Durable fabric, multiple pockets", price:599, mrp:1199, rating:4.1, img:"https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=500&q=80" },
  { id:"k-tshirt-1", category:"KIDS", sub:"T-Shirts", name:"Kids Printed T-Shirt", desc:"Fun prints, soft cotton fabric", price:299, mrp:599, rating:4.4, img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80" },
  { id:"k-inner-1", category:"KIDS", sub:"Inner Wear", name:"Kids Cotton Vest (Pack of 3)", desc:"Skin friendly, breathable fabric", price:299, mrp:599, rating:4.2, img:"https://images.unsplash.com/photo-1622445275576-721325763afe?w=500&q=80" },
  { id:"k-foot-1", category:"KIDS", sub:"Footwear", name:"Kids Velcro Sports Shoes", desc:"Easy wear, cushioned comfort", price:799, mrp:1599, rating:4.3, img:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80" },
  { id:"k-watch-1", category:"KIDS", sub:"Watches", name:"Kids Digital Sports Watch", desc:"Water resistant, fun colors", price:499, mrp:999, rating:4.1, img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&q=80" },
  { id:"k-acc-1", category:"KIDS", sub:"Accessories", name:"Kids School Backpack", desc:"Lightweight, spacious compartments", price:699, mrp:1399, rating:4.4, img:"https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&q=80" },
];

const SUBCATS = {
  ALL: [],
  MEN: ["Shirts","Pants","T-Shirts","Inner Wear","Footwear","Watches","Accessories"],
  WOMEN: ["Shirts","Pants","T-Shirts","Inner Wear","Footwear","Watches","Accessories"],
  KIDS: ["Shirts","Pants","T-Shirts","Inner Wear","Footwear","Watches","Accessories"],
};

/* ===================== STATE ===================== */
let state = {
  user: null,
  cart: [],          // [{id, qty}]
  wishlist: [],       // [id]
  orders: [],          // [{orderId, items, total, address, status, date}]
  activeCategory: "ALL",
  activeSub: "ALL",
  searchQuery: "",
  sort: "default",
  maxPrice: 5000,
  minRating: 0,
  minDiscount: 0,
  pendingOrder: null, // order being checked out before payment
};

/* ===================== STORAGE HELPERS ===================== */
function loadStorage(){
  try{
    state.cart = JSON.parse(localStorage.getItem("allingo_cart")) || [];
    state.wishlist = JSON.parse(localStorage.getItem("allingo_wishlist")) || [];
    state.orders = JSON.parse(localStorage.getItem("allingo_orders")) || [];
    state.user = JSON.parse(localStorage.getItem("allingo_user")) || null;
    const theme = localStorage.getItem("allingo_theme");
    if(theme === "dark") document.documentElement.setAttribute("data-theme","dark");
  }catch(e){ console.warn("Storage load error", e); }
}
function saveCart(){ localStorage.setItem("allingo_cart", JSON.stringify(state.cart)); }
function saveWishlist(){ localStorage.setItem("allingo_wishlist", JSON.stringify(state.wishlist)); }
function saveOrders(){ localStorage.setItem("allingo_orders", JSON.stringify(state.orders)); }
function saveUser(){ localStorage.setItem("allingo_user", JSON.stringify(state.user)); }

/* ===================== UTIL ===================== */
function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function formatINR(n){ return "₹" + Number(n).toLocaleString("en-IN"); }
function calcDiscount(price, mrp){ return Math.round(((mrp - price) / mrp) * 100); }
function genOrderId(){ return "ALG" + Date.now().toString().slice(-8) + Math.floor(Math.random()*90+10); }
function escapeHtml(str){ return String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function showToast(msg, type="info"){
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icons = { success:"✅", error:"⚠️", info:"ℹ️" };
  toast.innerHTML = `<span>${icons[type]||""}</span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(toast);
  setTimeout(()=> toast.remove(), 2700);
}

/* ===================== LOGIN LOGIC ===================== */
function initLogin(){
  const tabs = document.querySelectorAll(".login-tab");
  tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
      tabs.forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const which = tab.dataset.tab;
      document.getElementById("loginFormEmail").classList.toggle("active-form", which==="email");
      document.getElementById("loginFormPhone").classList.toggle("active-form", which==="phone");
    });
  });

  document.getElementById("loginFormEmail").addEventListener("submit", e=>{
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    const pass = document.getElementById("passwordInput").value;
    if(!email || !pass){ showToast("Please fill all fields","error"); return; }
    loginUser({ name: email.split("@")[0], contact: email, method:"email" });
  });

  document.getElementById("sendOtpBtn").addEventListener("click", ()=>{
    const phone = document.getElementById("phoneInput").value.trim();
    if(phone.length !== 10){ showToast("Enter a valid 10-digit phone number","error"); return; }
    document.getElementById("otpBlock").classList.remove("hidden");
    showToast("OTP sent! (Demo OTP: 1234)","success");
  });

  document.getElementById("loginFormPhone").addEventListener("submit", e=>{
    e.preventDefault();
    const phone = document.getElementById("phoneInput").value.trim();
    const otp = document.getElementById("otpInput").value.trim();
    if(document.getElementById("otpBlock").classList.contains("hidden")){
      showToast("Please request an OTP first","error"); return;
    }
    if(otp !== "1234"){ showToast("Invalid OTP. Try 1234","error"); return; }
    loginUser({ name:"User"+phone.slice(-4), contact:"+91 "+phone, method:"phone" });
  });

  document.getElementById("guestLoginBtn").addEventListener("click", ()=>{
    loginUser({ name:"Guest User", contact:"guest@allingo.com", method:"guest" });
  });
}

function loginUser(userObj){
  state.user = userObj;
  saveUser();
  showToast(`Welcome, ${userObj.name}!`, "success");
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  updateProfileDisplay();
  renderAll();
}

function updateProfileDisplay(){
  if(!state.user) return;
  document.getElementById("profileNameDisplay").textContent = "Hello, " + state.user.name;
  document.getElementById("profileContactDisplay").textContent = state.user.contact;
}

function logout(){
  state.user = null;
  localStorage.removeItem("allingo_user");
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
  showToast("Logged out successfully","info");
}

/* ===================== DARK MODE ===================== */
function toggleDarkMode(){
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  if(isDark){ html.removeAttribute("data-theme"); localStorage.setItem("allingo_theme","light"); }
  else{ html.setAttribute("data-theme","dark"); localStorage.setItem("allingo_theme","dark"); }
}

/* ===================== SUBCATEGORY STRIP ===================== */
function renderSubcatStrip(){
  const strip = document.getElementById("subcatStrip");
  strip.innerHTML = "";
  const subs = SUBCATS[state.activeCategory] || [];
  if(subs.length === 0){ strip.parentElement.classList.add("hidden"); return; }
  strip.parentElement.classList.remove("hidden");

  const allChip = document.createElement("button");
  allChip.className = "subcat-chip" + (state.activeSub==="ALL" ? " active":"");
  allChip.textContent = "All " + state.activeCategory;
  allChip.addEventListener("click", ()=>{ state.activeSub="ALL"; renderSubcatStrip(); renderProducts(); });
  strip.appendChild(allChip);

  subs.forEach(sub=>{
    const chip = document.createElement("button");
    chip.className = "subcat-chip" + (state.activeSub===sub ? " active":"");
    chip.textContent = sub;
    chip.addEventListener("click", ()=>{ state.activeSub = sub; renderSubcatStrip(); renderProducts(); });
    strip.appendChild(chip);
  });
}

/* ===================== CATEGORY NAV ===================== */
function initCategoryNav(){
  document.querySelectorAll(".cat-pill, .cat-pill-mobile").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const cat = btn.dataset.cat;
      state.activeCategory = cat;
      state.activeSub = "ALL";
      document.querySelectorAll(".cat-pill").forEach(b=> b.classList.toggle("active", b.dataset.cat===cat));
      document.querySelectorAll(".cat-pill-mobile").forEach(b=> b.classList.toggle("active", b.dataset.cat===cat));
      closeMobileMenu();
      renderSubcatStrip();
      renderProducts();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  });
}

/* ===================== FILTER / SORT ===================== */
function getFilteredProducts(){
  let list = PRODUCTS.slice();

  if(state.activeCategory !== "ALL"){
    list = list.filter(p => p.category === state.activeCategory);
  }
  if(state.activeSub !== "ALL"){
    list = list.filter(p => p.sub === state.activeSub);
  }
  if(state.searchQuery.trim()){
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q)
    );
  }
  list = list.filter(p => p.price <= state.maxPrice);
  list = list.filter(p => p.rating >= state.minRating);
  list = list.filter(p => calcDiscount(p.price,p.mrp) >= state.minDiscount);

  switch(state.sort){
    case "price-low": list.sort((a,b)=>a.price-b.price); break;
    case "price-high": list.sort((a,b)=>b.price-a.price); break;
    case "rating": list.sort((a,b)=>b.rating-a.rating); break;
    case "discount": list.sort((a,b)=> calcDiscount(b.price,b.mrp)-calcDiscount(a.price,a.mrp)); break;
    default: break;
  }
  return list;
}

/* ===================== RENDER PRODUCT GRID ===================== */
function renderProducts(){
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const list = getFilteredProducts();

  document.getElementById("resultsCount").textContent =
    state.searchQuery ? `Showing ${list.length} results for "${state.searchQuery}"` : `Showing ${list.length} products`;

  grid.innerHTML = "";
  if(list.length === 0){
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  list.forEach(p=>{
    const discount = calcDiscount(p.price, p.mrp);
    const isWished = state.wishlist.includes(p.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-img-wrap" data-action="quickview" data-id="${p.id}">
        <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy">
        <span class="card-badge">${discount}% OFF</span>
        <button class="card-wishlist-btn ${isWished?'active':''}" data-action="toggle-wishlist" data-id="${p.id}">
          ${isWished ? '❤️' : '🤍'}
        </button>
        <div class="card-quickview-btn" data-action="quickview" data-id="${p.id}">Quick View</div>
      </div>
      <div class="card-body">
        <div class="card-title">${escapeHtml(p.name)}</div>
        <div class="card-desc">${escapeHtml(p.desc)}</div>
        <span class="card-rating">★ ${p.rating}</span>
        <div class="card-price-row">
          <span class="card-price">${formatINR(p.price)}</span>
          <span class="card-mrp">${formatINR(p.mrp)}</span>
          <span class="card-discount">${discount}% off</span>
        </div>
        <div class="card-actions">
          <button class="card-btn cart" data-action="add-cart" data-id="${p.id}">🛒 Cart</button>
          <button class="card-btn buy" data-action="buy-now" data-id="${p.id}">⚡ Buy</button>
          <button class="card-btn share" data-action="share" data-id="${p.id}">🔗</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ===================== EVENT DELEGATION FOR PRODUCT GRID ===================== */
function initGridEvents(){
  document.getElementById("productGrid").addEventListener("click", e=>{
    const target = e.target.closest("[data-action]");
    if(!target) return;
    const id = target.dataset.id;
    const action = target.dataset.action;
    if(action === "quickview") openQuickView(id);
    if(action === "toggle-wishlist") toggleWishlist(id, target);
    if(action === "add-cart") addToCart(id);
    if(action === "buy-now") buyNow(id);
    if(action === "share") shareProduct(id);
  });
}

/* ===================== QUICK VIEW MODAL ===================== */
function openQuickView(id){
  const p = findProduct(id);
  if(!p) return;
  const discount = calcDiscount(p.price, p.mrp);
  const isWished = state.wishlist.includes(p.id);
  document.getElementById("quickViewContent").innerHTML = `
    <div class="qv-layout">
      <div class="qv-img"><img src="${p.img}" alt="${escapeHtml(p.name)}"></div>
      <div class="qv-info">
        <h2>${escapeHtml(p.name)}</h2>
        <span class="card-rating">★ ${p.rating} Rating</span>
        <p class="qv-desc">${escapeHtml(p.desc)}</p>
        <div class="card-price-row">
          <span class="card-price">${formatINR(p.price)}</span>
          <span class="card-mrp">${formatINR(p.mrp)}</span>
          <span class="card-discount">${discount}% off</span>
        </div>
        <div class="qv-actions">
          <button class="card-btn cart" style="flex:1" data-action="add-cart" data-id="${p.id}">🛒 Add to Cart</button>
          <button class="card-btn buy" style="flex:1" data-action="buy-now" data-id="${p.id}">⚡ Buy Now</button>
        </div>
        <div class="qv-actions">
          <button class="card-btn share" style="flex:1" data-action="toggle-wishlist" data-id="${p.id}">${isWished ? '❤️ Remove from Wishlist':'🤍 Add to Wishlist'}</button>
          <button class="card-btn share" style="flex:0 0 50px" data-action="share" data-id="${p.id}">🔗</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("quickViewModal").classList.remove("hidden");

  document.getElementById("quickViewContent").querySelectorAll("[data-action]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const action = btn.dataset.action;
      const pid = btn.dataset.id;
      if(action === "add-cart") addToCart(pid);
      if(action === "buy-now"){ closeModal("quickViewModal"); buyNow(pid); }
      if(action === "toggle-wishlist"){ toggleWishlist(pid); closeModal("quickViewModal"); }
      if(action === "share") shareProduct(pid);
    });
  });
}

/* ===================== WISHLIST ===================== */
function toggleWishlist(id, btnEl){
  const idx = state.wishlist.indexOf(id);
  if(idx > -1){
    state.wishlist.splice(idx,1);
    showToast("Removed from wishlist","info");
  }else{
    state.wishlist.push(id);
    showToast("Added to wishlist","success");
  }
  saveWishlist();
  updateBadges();
  renderProducts();
  renderWishlistDrawer();
}

function renderWishlistDrawer(){
  const body = document.getElementById("wishlistBody");
  if(state.wishlist.length === 0){
    body.innerHTML = `<div class="empty-state">💔 Your wishlist is empty.<br>Tap the heart icon on any product to save it here.</div>`;
    return;
  }
  body.innerHTML = state.wishlist.map(id=>{
    const p = findProduct(id);
    if(!p) return "";
    return `
      <div class="drawer-item">
        <img src="${p.img}" alt="${escapeHtml(p.name)}">
        <div class="drawer-item-info">
          <span class="di-title">${escapeHtml(p.name)}</span>
          <span class="di-price">${formatINR(p.price)}</span>
          <div class="drawer-item-actions">
            <button class="card-btn cart" style="padding:6px 10px" data-action="wl-add-cart" data-id="${p.id}">Add to Cart</button>
            <button class="di-remove" data-action="wl-remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  body.querySelectorAll("[data-action]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.dataset.id;
      if(btn.dataset.action === "wl-add-cart") addToCart(id);
      if(btn.dataset.action === "wl-remove") toggleWishlist(id);
    });
  });
}

/* ===================== CART ===================== */
function addToCart(id){
  const item = state.cart.find(c => c.id === id);
  if(item) item.qty += 1;
  else state.cart.push({ id, qty:1 });
  saveCart();
  updateBadges();
  renderCartDrawer();
  showToast("Added to cart","success");
}

function removeFromCart(id){
  state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  updateBadges();
  renderCartDrawer();
  showToast("Removed from cart","info");
}

function changeQty(id, delta){
  const item = state.cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ removeFromCart(id); return; }
  saveCart();
  updateBadges();
  renderCartDrawer();
}

function getCartTotal(){
  return state.cart.reduce((sum, c)=>{
    const p = findProduct(c.id);
    return p ? sum + p.price * c.qty : sum;
  }, 0);
}
function getCartCount(){
  return state.cart.reduce((sum,c)=>sum+c.qty, 0);
}

function renderCartDrawer(){
  const body = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");
  if(state.cart.length === 0){
    body.innerHTML = `<div class="empty-state">🛒 Your cart is empty.<br>Add some great products!</div>`;
    footer.innerHTML = "";
    return;
  }
  body.innerHTML = state.cart.map(c=>{
    const p = findProduct(c.id);
    if(!p) return "";
    return `
      <div class="drawer-item">
        <img src="${p.img}" alt="${escapeHtml(p.name)}">
        <div class="drawer-item-info">
          <span class="di-title">${escapeHtml(p.name)}</span>
          <span class="di-price">${formatINR(p.price * c.qty)}</span>
          <div class="drawer-item-actions">
            <div class="qty-control">
              <button data-action="qty-minus" data-id="${p.id}">−</button>
              <span>${c.qty}</span>
              <button data-action="qty-plus" data-id="${p.id}">+</button>
            </div>
            <button class="di-remove" data-action="cart-remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const total = getCartTotal();
  footer.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatINR(total)}</span></div>
    <div class="summary-row"><span>Delivery</span><span>FREE</span></div>
    <div class="summary-row total-row"><span>Total</span><span>${formatINR(total)}</span></div>
    <button class="btn-primary" style="width:100%" id="proceedCheckoutBtn">Proceed to Checkout</button>
  `;

  body.querySelectorAll("[data-action]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if(action === "qty-minus") changeQty(id, -1);
      if(action === "qty-plus") changeQty(id, 1);
      if(action === "cart-remove") removeFromCart(id);
    });
  });

  const proceedBtn = document.getElementById("proceedCheckoutBtn");
  if(proceedBtn) proceedBtn.addEventListener("click", ()=>{
    closeDrawer("cartOverlay");
    openCheckout(state.cart.map(c=>({...c})));
  });
}

function buyNow(id){
  openCheckout([{ id, qty:1 }]);
}

function updateBadges(){
  document.getElementById("cartCount").textContent = getCartCount();
  document.getElementById("wishlistCount").textContent = state.wishlist.length;
}

/* ===================== SHARE ===================== */
async function shareProduct(id){
  const p = findProduct(id);
  if(!p) return;
  const shareData = {
    title: "ALLINGO - " + p.name,
    text: `Check out ${p.name} for just ${formatINR(p.price)} on ALLINGO!`,
    url: window.location.href.split("#")[0] + "#" + p.id,
  };
  if(navigator.share){
    try{ await navigator.share(shareData); showToast("Shared successfully","success"); }
    catch(e){ /* user cancelled */ }
  }else{
    try{
      await navigator.clipboard.writeText(shareData.url);
      showToast("Link copied to clipboard!","success");
    }catch(e){
      showToast("Unable to share or copy link","error");
    }
  }
}

/* ===================== SEARCH ===================== */
function initSearch(){
  const input = document.getElementById("searchInput");
  input.addEventListener("input", ()=>{
    state.searchQuery = input.value;
    renderProducts();
  });
  document.getElementById("searchBtn").addEventListener("click", ()=>{
    state.searchQuery = input.value;
    renderProducts();
  });
  input.addEventListener("keydown", e=>{
    if(e.key === "Enter"){ state.searchQuery = input.value; renderProducts(); }
  });
}

/* ===================== SORT / FILTER CONTROLS ===================== */
function initFilters(){
  document.getElementById("sortSelect").addEventListener("change", e=>{
    state.sort = e.target.value;
    renderProducts();
  });

  const priceRange = document.getElementById("priceRange");
  priceRange.addEventListener("input", e=>{
    state.maxPrice = Number(e.target.value);
    document.getElementById("priceRangeVal").textContent = e.target.value;
    renderProducts();
  });

  document.querySelectorAll(".rating-chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.querySelectorAll(".rating-chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      state.minRating = Number(chip.dataset.rating);
      renderProducts();
    });
  });
  document.querySelector('.rating-chip[data-rating="0"]').classList.add("active");

  document.querySelectorAll(".discount-chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.querySelectorAll(".discount-chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      state.minDiscount = Number(chip.dataset.discount);
      renderProducts();
    });
  });
  document.querySelector('.discount-chip[data-discount="0"]').classList.add("active");

  document.getElementById("clearFiltersBtn").addEventListener("click", ()=>{
    state.maxPrice = 5000; state.minRating = 0; state.minDiscount = 0;
    priceRange.value = 5000;
    document.getElementById("priceRangeVal").textContent = "5000";
    document.querySelectorAll(".rating-chip").forEach(c=>c.classList.remove("active"));
    document.querySelector('.rating-chip[data-rating="0"]').classList.add("active");
    document.querySelectorAll(".discount-chip").forEach(c=>c.classList.remove("active"));
    document.querySelector('.discount-chip[data-discount="0"]').classList.add("active");
    renderProducts();
    showToast("Filters cleared","info");
  });

  document.getElementById("filterToggleBtn").addEventListener("click", ()=>{
    document.getElementById("filterSidebar").classList.toggle("open");
  });
}

/* ===================== DRAWERS / MODALS GENERIC ===================== */
function openDrawer(id){ document.getElementById(id).classList.remove("hidden"); }
function closeDrawer(id){ document.getElementById(id).classList.add("hidden"); }
function closeModal(id){ document.getElementById(id).classList.add("hidden"); }

function initOverlayCloseButtons(){
  document.querySelectorAll("[data-close]").forEach(btn=>{
    btn.addEventListener("click", ()=> closeDrawer(btn.dataset.close));
  });
  // click outside drawer/modal closes it
  [["wishlistOverlay"], ["cartOverlay"], ["quickViewModal"]].forEach(([id])=>{
    document.getElementById(id).addEventListener("click", e=>{
      if(e.target.id === id) closeDrawer(id);
    });
  });
}

/* ===================== HEADER ACTIONS ===================== */
function initHeaderActions(){
  document.querySelectorAll('[data-action="open-wishlist"]').forEach(el=>{
    el.addEventListener("click", ()=>{ renderWishlistDrawer(); openDrawer("wishlistOverlay"); closeProfileDropdown(); });
  });
  document.querySelectorAll('[data-action="open-cart"]').forEach(el=>{
    el.addEventListener("click", ()=>{ renderCartDrawer(); openDrawer("cartOverlay"); closeProfileDropdown(); });
  });
  document.querySelector('[data-action="go-home"]').addEventListener("click", ()=>{
    state.activeCategory = "ALL"; state.activeSub="ALL"; state.searchQuery="";
    document.getElementById("searchInput").value = "";
    document.querySelectorAll(".cat-pill").forEach(b=> b.classList.toggle("active", b.dataset.cat==="ALL"));
    renderSubcatStrip();
    renderProducts();
    window.scrollTo({top:0, behavior:"smooth"});
  });

  document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
  document.getElementById("mobileDarkModeBtn").addEventListener("click", toggleDarkMode);

  document.getElementById("profileBtn").addEventListener("click", e=>{
    e.stopPropagation();
    document.getElementById("profileDropdown").classList.toggle("hidden");
  });
  document.addEventListener("click", ()=> closeProfileDropdown());

  document.getElementById("logoutBtn").addEventListener("click", logout);
  document.getElementById("mobileLogoutBtn").addEventListener("click", logout);

  document.querySelectorAll('[data-action="open-orders"]').forEach(el=>{
    el.addEventListener("click", ()=>{ closeProfileDropdown(); closeMobileMenu(); openOrdersPage(); });
  });

  document.getElementById("mobileMenuBtn").addEventListener("click", ()=>{
    document.getElementById("mobileSideMenu").classList.remove("hidden");
  });
  document.getElementById("closeMobileMenu").addEventListener("click", closeMobileMenu);
  document.getElementById("mobileSideMenu").addEventListener("click", e=>{
    if(e.target.id === "mobileSideMenu") closeMobileMenu();
  });
}
function closeProfileDropdown(){ document.getElementById("profileDropdown").classList.add("hidden"); }
function closeMobileMenu(){ document.getElementById("mobileSideMenu").classList.add("hidden"); }

/* ===================== CHECKOUT FLOW ===================== */
function openCheckout(items){
  if(items.length === 0){ showToast("Your cart is empty","error"); return; }
  state.pendingOrder = { items, address:null, total:0 };
  renderCheckoutSummary(items);
  document.getElementById("checkoutPage").classList.remove("hidden");

  // Pre-fill if user info known
  if(state.user){
    document.getElementById("custName").value = state.user.name !== "Guest User" ? state.user.name : "";
    if(state.user.method === "email") document.getElementById("custEmail").value = state.user.contact;
    if(state.user.method === "phone") document.getElementById("custPhone").value = state.user.contact.replace("+91 ","");
  }
}

function renderCheckoutSummary(items){
  const list = document.getElementById("checkoutItemsList");
  let subtotal = 0;
  list.innerHTML = items.map(c=>{
    const p = findProduct(c.id);
    if(!p) return "";
    subtotal += p.price * c.qty;
    return `<div class="ci-row"><span>${escapeHtml(p.name)} × ${c.qty}</span><span>${formatINR(p.price*c.qty)}</span></div>`;
  }).join("");
  document.getElementById("sumSubtotal").textContent = formatINR(subtotal);
  document.getElementById("sumDelivery").textContent = "FREE";
  document.getElementById("sumTotal").textContent = formatINR(subtotal);
  state.pendingOrder.total = subtotal;
}

function initCheckoutForm(){
  document.getElementById("checkoutForm").addEventListener("submit", e=>{
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const email = document.getElementById("custEmail").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const city = document.getElementById("custCity").value.trim();
    const pincode = document.getElementById("custPincode").value.trim();
    const stateVal = document.getElementById("custState").value.trim();

    if(!name||!phone||!email||!address||!city||!pincode||!stateVal){
      showToast("Please fill in all fields","error"); return;
    }
    if(phone.length !== 10){ showToast("Enter a valid 10-digit phone number","error"); return; }
    if(pincode.length !== 6){ showToast("Enter a valid 6-digit pincode","error"); return; }

    state.pendingOrder.customer = { name, phone, email };
    state.pendingOrder.address = { address, city, pincode, state: stateVal };

    document.getElementById("checkoutPage").classList.add("hidden");
    document.getElementById("paymentAmount").textContent = formatINR(state.pendingOrder.total);
    document.getElementById("paymentPage").classList.remove("hidden");
  });
}

/* ===================== PAYMENT COMPLETE ===================== */
function initPayment(){
  document.getElementById("paymentCompletedBtn").addEventListener("click", ()=>{
    const order = state.pendingOrder;
    if(!order) return;

    const orderId = genOrderId();
    const newOrder = {
      orderId,
      items: order.items.map(c=>{
        const p = findProduct(c.id);
        return { id:c.id, name:p?.name, price:p?.price, qty:c.qty, img:p?.img };
      }),
      total: order.total,
      customer: order.customer,
      address: order.address,
      status: "Ordered",
      date: new Date().toISOString(),
    };
    state.orders.unshift(newOrder);
    saveOrders();

    // Remove purchased items from the cart (covers both "Buy Now" single items and full cart checkout)
    const purchasedIds = order.items.map(i=>i.id);
    purchasedIds.forEach(id=>{
      const idx = state.cart.findIndex(c=>c.id===id);
      if(idx>-1) state.cart.splice(idx,1);
    });
    saveCart();
    updateBadges();

    document.getElementById("paymentPage").classList.add("hidden");
    document.getElementById("successOrderId").textContent = orderId;
    document.getElementById("successPage").classList.remove("hidden");
    state.pendingOrder = null;

    // simulate progressing order status over time
    simulateOrderProgress(orderId);
  });
}

function simulateOrderProgress(orderId){
  const stages = ["Ordered","Packed","Shipped","Out For Delivery","Delivered"];
  let i = 0;
  const interval = setInterval(()=>{
    i++;
    if(i >= stages.length){ clearInterval(interval); return; }
    const order = state.orders.find(o=>o.orderId===orderId);
    if(!order){ clearInterval(interval); return; }
    order.status = stages[i];
    saveOrders();
    if(!document.getElementById("ordersPage").classList.contains("hidden")) renderOrdersPage();
  }, 15000); // progress every 15s for demo purposes
}

/* ===================== SUCCESS PAGE ACTIONS ===================== */
function initSuccessPage(){
  document.querySelector('[data-action="go-home-from-success"]').addEventListener("click", ()=>{
    document.getElementById("successPage").classList.add("hidden");
    renderProducts();
  });
  document.querySelector('[data-action="open-orders-from-success"]').addEventListener("click", ()=>{
    document.getElementById("successPage").classList.add("hidden");
    openOrdersPage();
  });
}

/* ===================== ORDERS / TRACKING ===================== */
const STATUS_STEPS = ["Ordered","Packed","Shipped","Out For Delivery","Delivered"];
const STATUS_ICONS = { Ordered:"📝", Packed:"📦", Shipped:"🚚", "Out For Delivery":"🛵", Delivered:"✅" };

function openOrdersPage(){
  renderOrdersPage();
  document.getElementById("ordersPage").classList.remove("hidden");
}

function renderOrdersPage(){
  const list = document.getElementById("ordersList");
  const noOrders = document.getElementById("noOrders");
  if(state.orders.length === 0){
    list.innerHTML = "";
    noOrders.classList.remove("hidden");
    return;
  }
  noOrders.classList.add("hidden");

  list.innerHTML = state.orders.map(order=>{
    const currentIdx = STATUS_STEPS.indexOf(order.status);
    const fillPct = currentIdx <= 0 ? 0 : (currentIdx / (STATUS_STEPS.length - 1)) * 100;
    const dateStr = new Date(order.date).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });

    return `
      <div class="order-card">
        <div class="order-card-top">
          <div><strong>Order #${order.orderId}</strong><br><span>Placed on ${dateStr}</span></div>
          <div style="text-align:right"><strong>${formatINR(order.total)}</strong><br><span>${order.items.reduce((s,i)=>s+i.qty,0)} item(s)</span></div>
        </div>
        <div class="order-items-preview">
          ${order.items.map(i=>`<img src="${i.img}" alt="${escapeHtml(i.name)}">`).join("")}
        </div>
        <div class="tracker">
          <div class="tracker-fill" style="width:${fillPct}%"></div>
          ${STATUS_STEPS.map((step, idx)=>{
            const done = idx < currentIdx;
            const current = idx === currentIdx;
            return `
              <div class="tracker-step ${done?'done':''} ${current?'current':''}">
                <div class="tracker-dot">${done ? '✓' : STATUS_ICONS[step]}</div>
                <div class="tracker-label">${step}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function initOrdersPage(){
  document.querySelector('[data-back="close-orders"]').addEventListener("click", ()=>{
    document.getElementById("ordersPage").classList.add("hidden");
  });
}

/* ===================== BACK BUTTONS (checkout/payment) ===================== */
function initBackButtons(){
  document.querySelector('[data-back="checkoutPage"]').addEventListener("click", ()=>{
    document.getElementById("paymentPage").classList.add("hidden");
    document.getElementById("checkoutPage").classList.remove("hidden");
  });
  document.querySelector('[data-back="cartOverlay-from-checkout"]').addEventListener("click", ()=>{
    document.getElementById("checkoutPage").classList.add("hidden");
    state.pendingOrder = null;
  });
}

/* ===================== RENDER ALL ===================== */
function renderAll(){
  renderSubcatStrip();
  renderProducts();
  updateBadges();
}

/* ===================== INIT ===================== */
function init(){
  loadStorage();

  // hide loader after short delay
  window.addEventListener("load", ()=>{
    setTimeout(()=>{
      document.getElementById("pageLoader").classList.add("fade-out");
    }, 600);
  });
  // fallback in case 'load' already fired
  setTimeout(()=> document.getElementById("pageLoader").classList.add("fade-out"), 1500);

  initLogin();
  initCategoryNav();
  initSearch();
  initFilters();
  initGridEvents();
  initOverlayCloseButtons();
  initHeaderActions();
  initCheckoutForm();
  initPayment();
  initSuccessPage();
  initOrdersPage();
  initBackButtons();

  // Resume session if already logged in
  if(state.user){
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    updateProfileDisplay();
  }
  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
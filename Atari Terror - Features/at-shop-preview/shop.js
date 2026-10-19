const products = [
  {id:'lp-limited',name:'LP “BELIEVER” 100 KS LIMITED GITD',price:999,type:'vinyl',label:'PŘEDOBJEDNÁVKA',limited:'100 KS',detail:'Glow in the dark · podepsaná všemi členy',image:'https://cdn.myshoptet.com/usr/shop.atariterror.com/user/shop/big/96_at2026-lp-believer-limit-nahled-03.jpg'},
  {id:'lp-standard',name:'LP “BELIEVER” STANDARD',price:699,type:'vinyl',label:'PŘEDOBJEDNÁVKA',detail:'Standardní edice · neonově zelený vinyl',image:'../work-web-preview/assets/images/believer-lp.jpeg'},
  {id:'tee-men',name:'PÁNSKÉ TRIKO “BELIEVER”',price:500,type:'apparel',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Černé tričko · velikost se vybere při objednávce'},
  {id:'tee-women',name:'DÁMSKÉ TRIKO “BELIEVER”',price:500,type:'apparel',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Černé tričko · velikost se vybere při objednávce'},
  {id:'cap',name:'SNAPBACK “BELIEVER”',price:650,type:'apparel',label:'PŘEDOBJEDNÁVKA',detail:'Černá kšiltovka Atari Terror'},
  {id:'set-men',name:'LP + PÁNSKÉ TRIKO',price:1150,type:'bundle',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Standardní LP + pánské triko'},
  {id:'set-men-cap',name:'LP + PÁNSKÉ TRIKO + SNAPBACK',price:1799,type:'bundle',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Standardní LP, pánské černé triko a černý snapback'},
  {id:'set-women',name:'LP + DÁMSKÉ TRIKO',price:1150,type:'bundle',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Standardní LP + dámské triko'},
  {id:'set-women-cap',name:'LP + DÁMSKÉ TRIKO + SNAPBACK',price:1799,type:'bundle',variant:true,label:'PŘEDOBJEDNÁVKA',detail:'Standardní LP, dámské černé triko a černý snapback'}
];
const money = n => new Intl.NumberFormat('cs-CZ').format(n) + ' Kč';
const read = key => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
let cart = read('atshop-cart');
let activeFilter = 'all';
const grid = document.querySelector('#products-grid');
const count = () => cart.reduce((sum,item)=>sum+item.qty,0);
function saveCart(){localStorage.setItem('atshop-cart',JSON.stringify(cart));renderCart();}
function renderProducts(){
  const query=document.querySelector('#search').value.trim().toLowerCase();
  const productStatus=read('atshop-product-status');
  const shown=products.filter(p=>productStatus[p.id]!=='paused'&&(activeFilter==='all'||p.type===activeFilter)&&`${p.name} ${p.detail}`.toLowerCase().includes(query));
  grid.innerHTML=shown.map(p=>`<article class="product"><a class="product-detail-link" href="product.html?id=${p.id}" aria-label="Detail produktu: ${p.name}"><div class="product-image">${p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy">`:`<div class="product-placeholder">AT<span>${p.type==='apparel'?'MERCH':'BELIEVER'}</span></div>`}<span class="badge">${p.label}</span>${p.limited?`<span class="limited">${p.limited}</span>`:''}</div></a><div class="product-info"><div><h3 class="product-name"><a class="product-detail-link" href="product.html?id=${p.id}">${p.name}</a></h3><p class="product-sub">${p.detail}</p></div><span class="price">${money(p.price)}</span>${p.variant?`<label class="variant">VELIKOST <select data-variant="${p.id}" aria-label="Velikost: ${p.name}"><option value="S">S</option><option value="M" selected>M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select></label>`:''}<button class="add-button" data-add="${p.id}">PŘIDAT DO KOŠÍKU <span>+</span></button></div></article>`).join('')||'<p>Žádný produkt neodpovídá hledání.</p>';
}
function renderCart(){
  document.querySelector('#cart-count').textContent=count();document.querySelector('#drawer-count').textContent=`(${count()})`;
  const lines=document.querySelector('#cart-lines');
  if(!cart.length){lines.innerHTML='<p class="empty-cart">Košík je zatím prázdný. Vyber si svůj Believer.</p>';document.querySelector('#cart-footer').innerHTML='';return;}
  lines.innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id);const key=`${p.id}|${item.variant||''}`;return `<article class="cart-line"><strong>${p.name}</strong><div class="qty-controls"><button data-qty="${key}" data-step="-1" aria-label="Odebrat kus">−</button><span>${item.qty}</span><button data-qty="${key}" data-step="1" aria-label="Přidat kus">+</button></div><small>${item.variant?`Velikost ${item.variant} · `:''}${money(p.price)} / ks</small></article>`}).join('');
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  document.querySelector('#cart-footer').innerHTML=`<p class="cart-total"><span>MEZISOUČET</span><span>${money(total)}</span></p><p class="cart-footnote">Předobjednávky odesíláme v 1. čtvrtině roku 2027. Doprava se připočítá v dalším kroku.</p><button class="button dark" id="checkout-open">POKRAČOVAT K OBJEDNÁVCE <span>→</span></button>`;
}
function showToast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2300);}
function showPanel(id){document.querySelector('#scrim').hidden=false;document.querySelector('#'+id).classList.add('open');document.querySelector('#'+id).setAttribute('aria-hidden','false');}
function closePanels(){document.querySelector('#scrim').hidden=true;document.querySelectorAll('.drawer,.checkout-modal,.admin-modal').forEach(el=>{el.classList.remove('open');el.setAttribute('aria-hidden','true');});}
function renderOrders(){const orders=read('atshop-orders');document.querySelector('#orders-list').innerHTML=orders.length?orders.map(o=>`<article class="order-card"><header><span>${o.id} · ${o.name}</span><span>${money(o.total)}</span></header><p>${o.items.map(i=>`${i.name}${i.variant?` (${i.variant})`:''} × ${i.qty}`).join('<br>')}<br>${o.email} · ${o.shipping} · ${o.payment}</p><label>Stav objednávky <select data-order="${o.id}"><option ${o.status==='Nová'?'selected':''}>Nová</option><option ${o.status==='Zaplacena'?'selected':''}>Zaplacena</option><option ${o.status==='K expedici'?'selected':''}>K expedici</option><option ${o.status==='Odeslána'?'selected':''}>Odeslána</option><option ${o.status==='Zrušena'?'selected':''}>Zrušena</option></select></label></article>`).join(''):'<p class="empty-cart">Zatím tu nejsou žádné testovací objednávky.</p>';}
document.addEventListener('click',e=>{
  const add=e.target.closest('[data-add]');if(add){const id=add.dataset.add;const variant=document.querySelector(`[data-variant="${id}"]`)?.value||'';const existing=cart.find(i=>i.id===id&&i.variant===variant);existing?existing.qty++:cart.push({id,variant,qty:1});saveCart();showToast('Přidáno do košíku');return;}
  const qty=e.target.closest('[data-qty]');if(qty){const [id,variant='']=qty.dataset.qty.split('|');const item=cart.find(i=>i.id===id&&(i.variant||'')===variant);item.qty+=Number(qty.dataset.step);cart=cart.filter(i=>i.qty>0);saveCart();return;}
  const filter=e.target.closest('[data-filter]');if(filter){activeFilter=filter.dataset.filter;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===filter));renderProducts();return;}
  if(e.target.closest('#open-cart')){renderCart();showPanel('cart-drawer');return;}
  if(e.target.closest('#checkout-open')){closePanels();showPanel('checkout-modal');return;}
  if(e.target.closest('#admin-open')){renderOrders();showPanel('admin-modal');return;}
  if(e.target.closest('[data-close]')||e.target.id==='scrim')closePanels();
});
document.querySelector('#search').addEventListener('input',renderProducts);
document.querySelector('#checkout-form').addEventListener('submit',e=>{
  e.preventDefault();const data=new FormData(e.currentTarget);const productsTotal=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);const shipPrice={'Zásilkovna':89,'Kurýr':129,'Osobní odběr':0}[data.get('shipping')];
  const orders=read('atshop-orders');const order={id:'AT-'+String(Date.now()).slice(-6),createdAt:new Date().toISOString(),name:data.get('name'),email:data.get('email'),address:{street:data.get('street'),zip:data.get('zip'),city:data.get('city')},shipping:data.get('shipping'),payment:data.get('payment'),paymentStatus:data.get('payment')==='Comgate'?'Čeká na platbu':'Čeká na převod',total:productsTotal+shipPrice,status:'Nová',items:cart.map(i=>({name:products.find(p=>p.id===i.id).name,variant:i.variant,qty:i.qty,price:products.find(p=>p.id===i.id).price}))};orders.unshift(order);localStorage.setItem('atshop-orders',JSON.stringify(orders));cart=[];saveCart();e.currentTarget.reset();closePanels();showToast(`Testovací objednávka ${order.id} uložena v tomto prohlížeči`);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanels();});
renderProducts();renderCart();
if(new URLSearchParams(location.search).get('openCart')==='1'){renderCart();showPanel('cart-drawer');}

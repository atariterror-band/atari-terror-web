const catalog = [
  {id:'lp-limited',name:'LP “BELIEVER” 100 KS LIMITED GITD',price:999,category:'LP',detail:'Podepsaná limitovaná edice · 100 ks'},
  {id:'lp-standard',name:'LP “BELIEVER” STANDARD',price:699,category:'LP',detail:'Neonově zelený vinyl'},
  {id:'tee-men',name:'PÁNSKÉ TRIKO “BELIEVER”',price:500,category:'TRIČKO',detail:'Předobjednávka'},
  {id:'tee-women',name:'DÁMSKÉ TRIKO “BELIEVER”',price:500,category:'TRIČKO',detail:'Předobjednávka'},
  {id:'cap',name:'SNAPBACK “BELIEVER”',price:650,category:'ČEPICE',detail:'Předobjednávka'},
  {id:'set-men',name:'LP + PÁNSKÉ TRIKO',price:1150,category:'SET',detail:'LP + tričko'},
  {id:'set-men-cap',name:'LP + PÁNSKÉ TRIKO + SNAPBACK',price:1799,category:'SET',detail:'LP + tričko + snapback'},
  {id:'set-women',name:'LP + DÁMSKÉ TRIKO',price:1150,category:'SET',detail:'LP + tričko'},
  {id:'set-women-cap',name:'LP + DÁMSKÉ TRIKO + SNAPBACK',price:1799,category:'SET',detail:'LP + tričko + snapback'}
];
const money=n=>new Intl.NumberFormat('cs-CZ',{style:'currency',currency:'CZK',maximumFractionDigits:0}).format(n||0);
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const read=key=>{try{return JSON.parse(localStorage.getItem(key))||[]}catch{return[]}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
let orders=read('atshop-orders');
const statusClass=status=>({'Nová':'new','Zaplacena':'paid','K expedici':'packing','Odeslána':'shipped','Zrušena':'cancelled'}[status]||'new');
const dateText=value=>{if(!value)return'—';const date=new Date(value);return Number.isNaN(date.getTime())?'—':new Intl.DateTimeFormat('cs-CZ',{day:'2-digit',month:'2-digit',year:'numeric'}).format(date)};
const datetimeText=value=>{if(!value)return'—';const date=new Date(value);return Number.isNaN(date.getTime())?'—':new Intl.DateTimeFormat('cs-CZ',{day:'2-digit',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(date)};
function itemCount(order){return(order.items||[]).reduce((n,item)=>n+(Number(item.qty)||0),0)}
function subtotalPaid(){return orders.filter(o=>o.paymentStatus==='Zaplaceno'||o.status==='Zaplacena').reduce((n,o)=>n+(Number(o.total)||0),0)}
function statusPill(status){return`<span class="status-pill ${statusClass(status)}">${escapeHtml(status||'Nová')}</span>`}
function toast(message){const el=document.querySelector('#admin-toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2400)}
function orderMatchesFilter(order){
  const q=(document.querySelector('#order-search')?.value||'').trim().toLowerCase();
  const status=document.querySelector('#status-filter')?.value||'all';
  const shipping=document.querySelector('#shipping-filter')?.value||'all';
  const haystack=[order.id,order.name,order.email,(order.items||[]).map(i=>i.name).join(' ')].join(' ').toLowerCase();
  return(!q||haystack.includes(q))&&(status==='all'||order.status===status||order.paymentStatus===status)&&(shipping==='all'||String(order.shipping||'').toLowerCase().includes(shipping.toLowerCase()));
}
function renderStats(){
  const fresh=orders.filter(o=>o.status==='Nová').length;
  const awaiting=orders.filter(o=>(o.paymentStatus||'').startsWith('Čeká')).length;
  const fulfillment=orders.filter(o=>['K expedici','Odeslána'].includes(o.status)).length;
  document.querySelector('#stats').innerHTML=[
    ['CELKEM OBJEDNÁVEK',orders.length,'↗','Všechny přijaté objednávky'],
    ['NOVÉ K VYŘÍZENÍ',fresh,'＋','Vyžadují další krok'],
    ['ČEKÁ NA PLATBU',awaiting,'◷','Podle stavu platby'],
    ['ZAPLACENO',money(subtotalPaid()),'◆','Součet zaplacených objednávek']
  ].map(([label,value,icon,note])=>`<article class="stat-card"><div><span>${label}</span><b>${icon}</b></div><strong>${value}</strong><small>${note}</small></article>`).join('');
}
function renderRecent(){
  const rows=orders.slice(0,6);
  document.querySelector('#recent-orders').innerHTML=rows.length?rows.map(o=>`<tr><td><button class="table-link" data-open-order="${escapeHtml(o.id)}">${escapeHtml(o.id)}</button></td><td><strong>${escapeHtml(o.name)}</strong><small>${escapeHtml(o.email)}</small></td><td>${dateText(o.createdAt)}</td><td>${money(o.total)}</td><td>${escapeHtml(o.shipping||'—')}</td><td>${statusPill(o.status)}</td></tr>`).join(''):'<tr><td colspan="6"><div class="empty-admin"><b>Zatím tu nejsou žádné objednávky.</b><span>Načtěte ukázková data nebo vytvořte testovací objednávku z e-shopu.</span></div></td></tr>';
}
function renderOrders(){
  const rows=orders.filter(orderMatchesFilter);
  document.querySelector('#orders-result-count').textContent=`${rows.length} z ${orders.length}`;
  document.querySelector('#orders-table').innerHTML=rows.length?rows.map(o=>`<tr><td><button class="table-link" data-open-order="${escapeHtml(o.id)}">${escapeHtml(o.id)}</button></td><td><strong>${escapeHtml(o.name)}</strong><small>${escapeHtml(o.email)}</small></td><td>${dateText(o.createdAt)}</td><td>${itemCount(o)} ks</td><td><strong>${money(o.total)}</strong></td><td>${escapeHtml(o.shipping||'—')}</td><td><span class="payment-method">${escapeHtml(o.payment||'—')}</span><small>${escapeHtml(o.paymentStatus||'Nezadáno')}</small></td><td>${statusPill(o.status)}</td></tr>`).join(''):'<tr><td colspan="8"><div class="empty-admin"><b>Nenalezena žádná objednávka.</b><span>Změňte hledání nebo filtry.</span></div></td></tr>';
}
function customerRows(){
  const map=new Map();
  orders.forEach(o=>{const key=(o.email||o.name||o.id).toLowerCase();const c=map.get(key)||{name:o.name||'—',email:o.email||'—',orders:0,total:0,last:null};c.orders++;c.total+=Number(o.total)||0;if(!c.last||new Date(o.createdAt)>new Date(c.last))c.last=o.createdAt;map.set(key,c);});
  return[...map.values()].sort((a,b)=>new Date(b.last||0)-new Date(a.last||0));
}
function renderBuyers(){
  const query=(document.querySelector('#buyer-search').value||'').toLowerCase().trim();
  const buyers=customerRows().filter(c=>!query||`${c.name} ${c.email}`.toLowerCase().includes(query));
  document.querySelector('#buyers-result-count').textContent=`${buyers.length} zákazníků`;
  document.querySelector('#buyers-table').innerHTML=buyers.length?buyers.map(c=>`<tr><td><strong>${escapeHtml(c.name)}</strong></td><td><a class="email-link" href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a></td><td>${c.orders}</td><td>${money(c.total)}</td><td>${dateText(c.last)}</td></tr>`).join(''):'<tr><td colspan="5"><div class="empty-admin"><b>Seznam zákazníků je zatím prázdný.</b><span>Kontakty se vytvoří z objednávek.</span></div></td></tr>';
}
function renderProducts(){
  const states=read('atshop-product-status');
  document.querySelector('#products-result-count').textContent=`${catalog.length} produktů`;
  document.querySelector('#products-table').innerHTML=catalog.map(p=>`<tr><td><strong>${p.name}</strong><small>${p.detail}</small></td><td>${p.category}</td><td><strong>${money(p.price)}</strong></td><td><span class="preorder-pill">PŘEDOBJEDNÁVKA</span></td><td><label class="switch-row"><input type="checkbox" data-product-active="${p.id}" ${states[p.id]==='paused'?'':'checked'}><span class="switch"></span><b>${states[p.id]==='paused'?'Skrytý':'Aktivní'}</b></label></td></tr>`).join('');
}
function renderAll(){orders=read('atshop-orders');document.querySelector('#nav-order-count').textContent=orders.length;renderStats();renderRecent();renderOrders();renderBuyers();renderProducts();}
function openOrder(id){
  const o=orders.find(order=>order.id===id);if(!o)return;
  const address=o.address?[escapeHtml(o.address.street),`${escapeHtml(o.address.zip||'')} ${escapeHtml(o.address.city||'')}`].filter(Boolean).join('<br>'):'Adresa nebyla v této objednávce uložena.';
  const lines=(o.items||[]).map(i=>`<div class="detail-item"><span>${escapeHtml(i.name)}${i.variant?`<small>Velikost ${escapeHtml(i.variant)}</small>`:''}<small>${Number(i.qty)||0} ks × ${money(i.price||0)}</small></span><b>${money((Number(i.price)||0)*(Number(i.qty)||0))}</b></div>`).join('')||'<p class="empty-admin">Položky nejsou k dispozici.</p>';
  const panel=document.querySelector('#order-detail');
  panel.innerHTML=`<header class="detail-panel-head"><div><p class="eyebrow">OBJEDNÁVKA</p><h2>${escapeHtml(o.id)}</h2><small>${datetimeText(o.createdAt)}</small></div><button class="icon-button" data-close-detail aria-label="Zavřít detail">×</button></header><div class="detail-panel-content"><section class="detail-block"><div class="detail-block-title"><b>STAV OBJEDNÁVKY</b>${statusPill(o.status)}</div><select data-edit-status="${escapeHtml(o.id)}" aria-label="Stav objednávky"><option ${o.status==='Nová'?'selected':''}>Nová</option><option ${o.status==='Zaplacena'?'selected':''}>Zaplacena</option><option ${o.status==='K expedici'?'selected':''}>K expedici</option><option ${o.status==='Odeslána'?'selected':''}>Odeslána</option><option ${o.status==='Zrušena'?'selected':''}>Zrušena</option></select></section><section class="detail-block"><b>POLOŽKY OBJEDNÁVKY</b>${lines}<div class="detail-total"><span>CELKEM</span><strong>${money(o.total)}</strong></div></section><section class="detail-block"><b>ZÁKAZNÍK</b><p class="buyer-name">${escapeHtml(o.name)}</p><a class="email-link" href="mailto:${escapeHtml(o.email)}">${escapeHtml(o.email)}</a><p class="address-text">${address}</p></section><section class="detail-block"><b>DOPRAVA</b><p class="shipping-selected">${escapeHtml(o.shipping||'Nespecifikována')}</p><small>Volba zákazníka při objednávce</small></section><section class="detail-block"><b>PLATBA</b><p>${escapeHtml(o.payment||'—')}</p><select data-edit-payment="${escapeHtml(o.id)}" aria-label="Stav platby"><option ${o.paymentStatus==='Čeká na platbu'?'selected':''}>Čeká na platbu</option><option ${o.paymentStatus==='Zaplaceno'?'selected':''}>Zaplaceno</option><option ${o.paymentStatus==='Neúspěšná'?'selected':''}>Neúspěšná</option><option ${o.paymentStatus==='Vráceno'?'selected':''}>Vráceno</option></select></section><p class="panel-footnote">Změny jsou lokální v tomto prototypu. Při ostrém provozu musí stav platby potvrdit serverový webhook brány.</p></div>`;
  document.querySelector('#detail-scrim').hidden=false;panel.classList.add('open');panel.setAttribute('aria-hidden','false');
}
function closeOrder(){const panel=document.querySelector('#order-detail');panel.classList.remove('open');panel.setAttribute('aria-hidden','true');document.querySelector('#detail-scrim').hidden=true;}
function exportCsv(){
  if(!orders.length){toast('Nejsou žádné objednávky k exportu.');return;}
  const header=['Číslo objednávky','Datum','Jméno','E-mail','Ulice','PSČ','Město','Položky','Celkem Kč','Doprava','Platba','Stav platby','Stav objednávky'];
  const cell=value=>`"${String(value??'').replaceAll('"','""')}"`;
  const rows=orders.map(o=>[o.id,o.createdAt,o.name,o.email,o.address?.street,o.address?.zip,o.address?.city,(o.items||[]).map(i=>`${i.name}${i.variant?` (${i.variant})`:''} x${i.qty}`).join(' | '),o.total,o.shipping,o.payment,o.paymentStatus,o.status].map(cell).join(';'));
  const blob=new Blob(['\ufeff'+[header.map(cell).join(';'),...rows].join('\r\n')],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='at-shop-objednavky.csv';a.click();URL.revokeObjectURL(url);toast('Export objednávek je připraven.');
}
function seedDemo(){
  orders=read('atshop-orders');if(orders.some(o=>o.demo)){toast('Ukázková data už jsou načtená.');return;}
  const now=Date.now();const demos=[
    {id:'AT-DEMO-1042',ago:1,name:'Alex Demo',email:'alex.demo@example.test',address:{street:'Demo 12',zip:'110 00',city:'Praha'},shipping:'Zásilkovna',payment:'Comgate',paymentStatus:'Zaplaceno',status:'K expedici',total:1288,items:[{name:'LP “BELIEVER” STANDARD',qty:1,price:699},{name:'PÁNSKÉ TRIKO “BELIEVER”',variant:'L',qty:1,price:500}]},
    {id:'AT-DEMO-1041',ago:2,name:'Sam Sample',email:'sam.sample@example.test',address:{street:'Ukázková 5',zip:'602 00',city:'Brno'},shipping:'Kurýr',payment:'Comgate',paymentStatus:'Čeká na platbu',status:'Nová',total:1128,items:[{name:'LP “BELIEVER” 100 KS LIMITED GITD',qty:1,price:999}]},
    {id:'AT-DEMO-1040',ago:4,name:'Robin Test',email:'robin.test@example.test',address:{street:'Testovací 1',zip:'301 00',city:'Plzeň'},shipping:'Osobní odběr',payment:'Převod',paymentStatus:'Zaplaceno',status:'Odeslána',total:1799,items:[{name:'LP + PÁNSKÉ TRIKO + SNAPBACK',variant:'M',qty:1,price:1799}]}
  ].map(o=>({...o,demo:true,createdAt:new Date(now-o.ago*86400000).toISOString()}));
  orders=[...demos,...orders];write('atshop-orders',orders);renderAll();toast('Přidány tři demo objednávky. E-maily jsou fiktivní.');
}
function setView(name){document.querySelectorAll('.admin-view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));document.querySelectorAll('.admin-nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===name));document.querySelector('#page-title').textContent=({overview:'PŘEHLED',orders:'OBJEDNÁVKY',buyers:'ZÁKAZNÍCI',products:'PRODUKTY'})[name]||'PŘEHLED';}
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-view]');if(nav){setView(nav.dataset.view);return;}
  const goto=e.target.closest('[data-goto]');if(goto){setView(goto.dataset.goto);return;}
  const open=e.target.closest('[data-open-order]');if(open){openOrder(open.dataset.openOrder);return;}
  if(e.target.closest('[data-close-detail]')||e.target.id==='detail-scrim')closeOrder();
  if(e.target.closest('#seed-data'))seedDemo();
  if(e.target.closest('#export-csv'))exportCsv();
});
document.querySelector('#order-search').addEventListener('input',renderOrders);
document.querySelector('#status-filter').addEventListener('change',renderOrders);
document.querySelector('#shipping-filter').addEventListener('change',renderOrders);
document.querySelector('#buyer-search').addEventListener('input',renderBuyers);
document.querySelector('#order-detail').addEventListener('change',e=>{
  const order=orders.find(o=>o.id===e.target.dataset.editStatus||o.id===e.target.dataset.editPayment);if(!order)return;
  if(e.target.matches('[data-edit-status]'))order.status=e.target.value;
  if(e.target.matches('[data-edit-payment]')){order.paymentStatus=e.target.value;if(e.target.value==='Zaplaceno')order.status=order.status==='Nová'?'Zaplacena':order.status;}
  write('atshop-orders',orders);renderAll();openOrder(order.id);toast('Objednávka aktualizována v místním náhledu.');
});
document.querySelector('#products-table').addEventListener('change',e=>{
  if(!e.target.matches('[data-product-active]'))return;const states=read('atshop-product-status');states[e.target.dataset.productActive]=e.target.checked?'active':'paused';write('atshop-product-status',states);renderProducts();toast(e.target.checked?'Produkt je v náhledu aktivní.':'Produkt je v náhledu skrytý.');
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOrder();});
renderAll();

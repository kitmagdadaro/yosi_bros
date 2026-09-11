const STORAGE_KEY = "yosi__bros_inventory_v1";

let products = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const $ = id => document.getElementById(id);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function render() {
  const query = $("search").value.trim().toLowerCase();
  const visible = products.filter(p => p.name.toLowerCase().includes(query));

  $("productCount").textContent = products.length;
  $("totalStock").textContent = products.reduce((sum, p) => sum + p.quantity, 0);
  $("lowStock").textContent = products.filter(p => p.quantity <= 5).length;

  $("empty").style.display = visible.length ? "none" : "block";

  $("productList").innerHTML = visible.map(p => `
    <div class="product">
      <div>
        <span class="product-name">${escapeHtml(p.name)}</span>
        ${p.quantity <= 5 ? '<span class="badge">LOW STOCK</span>' : ''}
      </div>
      <div class="qty">${p.quantity}</div>
      <div class="actions">
        <button title="Remove 1" onclick="changeStock('${p.id}', -1)">−</button>
        <button title="Add 1" onclick="changeStock('${p.id}', 1)">+</button>
        <button class="remove" title="Delete product" onclick="deleteProduct('${p.id}')">×</button>
      </div>
    </div>
  `).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

$("productForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = $("productName").value.trim();
  const quantity = Number($("quantity").value);

  if (!name || quantity < 0) return;

  const existing = products.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (existing) {
    existing.quantity += quantity;
  } else {
    products.push({
      id: crypto.randomUUID(),
      name,
      quantity
    });
  }

  save();
  e.target.reset();
  $("quantity").value = 0;
  render();
});

function changeStock(id, amount) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  product.quantity = Math.max(0, product.quantity + amount);
  save();
  render();
}

function deleteProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (confirm(`Delete "${product.name}"?`)) {
    products = products.filter(p => p.id !== id);
    save();
    render();
  }
}

$("clearAll").addEventListener("click", () => {
  if (!products.length) return;
  if (confirm("Delete every product from this browser?")) {
    products = [];
    save();
    render();
  }
});

$("search").addEventListener("input", render);

render();

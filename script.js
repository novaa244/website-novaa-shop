// Pastikan jQuery sudah terload
$(document).ready(function () {

  // === 1️⃣ SMOOTH SCROLL KE BAGIAN PRODUK ===
  $("#btn-belanja").click(function () {
    $("html, body").animate({
      scrollTop: $(".produk-unggulan").offset().top
    }, 800);
  });

  // === 2️⃣ ANIMASI FADE-IN PRODUK SAAT SCROLL ===
  $(window).scroll(function () {
    $(".produk-card").each(function () {
      const pos = $(this).offset().top;
      const winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("fadeIn");
      }
    });
  });

  // === 3️⃣ EFEK HOVER UNTUK TOMBOL HERO ===
  $("#btn-belanja").hover(
    function () { $(this).css("transform", "scale(1.05)"); },
    function () { $(this).css("transform", "scale(1)"); }
  );
});


// === 4️⃣ REVIEW PRODUK ===
const reviewForm = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("review-name").value;
    const rating = document.getElementById("review-rating").value;
    const comment = document.getElementById("review-comment").value;
    const photoFile = document.getElementById("review-photo").files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      const reviewHTML = `
        <div class="review-card">
          <img src="${e.target.result}" class="review-photo">
          <div class="review-content">
            <h4>${name} ⭐ ${rating}/5</h4>
            <p>${comment}</p>
          </div>
        </div>
      `;
      reviewList.insertAdjacentHTML("beforeend", reviewHTML);
      reviewForm.reset();
    };
    if (photoFile) reader.readAsDataURL(photoFile);
  });
}


// === 5️⃣ SIMPAN PRODUK KE LOCAL STORAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".produk-card button");

  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".produk-card");
      const name = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText.replace(/[^\d]/g, "");
      const img = card.querySelector("img").src;

      const product = {
        name,
        price: parseInt(price),
        img,
        qty: 1
      };

      // Ambil data lama dari local storage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Cek jika produk sudah ada
      const existing = cart.find(p => p.name === product.name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push(product);
      }

      // Simpan kembali
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    });
  });


  // === 6️⃣ TAMPILKAN PRODUK DI HALAMAN CHECKOUT ===
  const cartContainer = document.getElementById("cartItems");
  const totalEl = document.getElementById("totalHarga");

  if (cartContainer && totalEl) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartContainer.innerHTML = `<p>Keranjang masih kosong 😔</p>`;
      totalEl.innerText = `Rp 0`;
    } else {
      cartContainer.innerHTML = cart.map((item) => `
        <div class="checkout-item">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <h4>${item.name}</h4>
            <p>Rp ${item.price.toLocaleString('id-ID')}</p>
            <p>Qty: ${item.qty}</p>
          </div>
        </div>
      `).join("");

      const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
      totalEl.innerText = `Rp ${total.toLocaleString("id-ID")}`;
    }
  }


  // === 7️⃣ PROSES PEMBAYARAN ===
  const payBtn = document.getElementById("payBtn");
  if (payBtn) {
    payBtn.addEventListener("click", () => {
      const metodeInput = document.querySelector("input[name='metode']:checked");
      if (!metodeInput) {
        alert("Pilih metode pembayaran terlebih dahulu!");
        return;
      }

      const metode = metodeInput.value;
      alert(`Pembayaran dengan ${metode} berhasil! Terima kasih telah berbelanja 😄`);

      localStorage.removeItem("cart"); // kosongkan keranjang
      window.location.href = "produk.html"; // kembali ke halaman produk
    });
  }
});

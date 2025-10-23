<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kontak Kami | NovaShop</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Header -->
  <header>
    <div class="logo">🛍️ NovaShop</div>
    <nav>
      <ul>
        <li><a href="index.html">Beranda</a></li>
        <li><a href="produk.html">Produk</a></li>
        <li><a href="fitur.html">Fitur</a></li>
        <li><a href="kontak.php" class="active">Kontak</a></li>
        <li><a href="checkout.html">Checkout</a></li>
      </ul>
    </nav>
  </header>

  <!-- Form Kontak -->
  <section class="contact">
    <h2>Hubungi Kami</h2>
    <p>Silakan isi form di bawah ini untuk mengirim pesan atau pertanyaan Anda.</p>

    <form method="post" id="contactForm">
      <label for="nama">Nama Lengkap:</label>
      <input type="text" id="nama" name="nama" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="pesan">Pesan:</label>
      <textarea id="pesan" name="pesan" rows="5" required></textarea>

      <button type="submit" name="kirim">Kirim Pesan</button>
    </form>

    <?php
      if (isset($_POST['kirim'])) {
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $pesan = htmlspecialchars($_POST['pesan']);

        echo "<div class='hasil'>";
        echo "<h3>📩 Pesan Berhasil Dikirim!</h3>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Pesan:</strong> $pesan</p>";
        echo "</div>";
      }
    ?>
  </section>

  <footer>
    <p>© 2025 NovaShop | Semua Hak Dilindungi</p>
  </footer>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    // Validasi sederhana sebelum submit
    $("#contactForm").on("submit", function(e) {
      if ($("#nama").val() === "" || $("#email").val() === "" || $("#pesan").val() === "") {
        alert("Semua kolom wajib diisi!");
        e.preventDefault();
      }
    });
  </script>

</body>
</html>

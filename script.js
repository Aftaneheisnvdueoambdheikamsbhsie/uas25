function hitungTotal() {
    const item1 = parseFloat(document.getElementById("item1").value);
    const item2 = parseFloat(document.getElementById("item2").value);
    const item3 = parseFloat(document.getElementById("item3").value);

    // Validasi Input
    if (isNaN(item1) || isNaN(item2) || isNaN(item3) || item1 < 0 || item2 < 0 || item3 < 0) {
        document.getElementById("output").textContent = "Input tidak valid. Harap masukkan angka positif untuk semua item.";
        return;
    }

    // Hitung Total Belanja
    const totalBelanja = item1 + item2 + item3;
    let diskon = 0;

    // Tentukan Diskon
    if (totalBelanja >= 1000000) {
        diskon = totalBelanja * 0.3;
    } else if (totalBelanja >= 500000) {
        diskon = totalBelanja * 0.2;
    } else if (totalBelanja >= 100000) {
        diskon = totalBelanja * 0.1;
    }

    // Hitung Total Bayar
    const totalBayar = totalBelanja - diskon;

    // Tampilkan Output
    document.getElementById("output").textContent =
        `Harga Item 1: Rp ${item1.toLocaleString()}\n` +
        `Harga Item 2: Rp ${item2.toLocaleString()}\n` +
        `Harga Item 3: Rp ${item3.toLocaleString()}\n\n` +
        `Total Belanja: Rp ${totalBelanja.toLocaleString()}\n` +
        `Besar Diskon: Rp ${diskon.toLocaleString()}\n` +
        `Total Bayar: Rp ${totalBayar.toLocaleString()}`;
}

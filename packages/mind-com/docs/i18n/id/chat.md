<script setup>
  const chatPrompts = [
    // Produk Inti & Teknologi
    "Interpretasi AI real-time vs penerjemah simultan tradisional",
    "Cara kerja terjemahan suara AI dalam rapat video",
    "Benchmark latensi terjemahan ucapan-ke-ucapan",
    "Akurasi interpretasi AI untuk percakapan bisnis",
    "Terjemahan AI yang sadar konteks dalam rapat langsung",
    
    // Kasus Penggunaan Bisnis
    "Rapat penjualan internasional tanpa hambatan bahasa",
    "Kolaborasi tim global dengan terjemahan instan",
    "Komunikasi pemasok manufaktur lintas batas",
    "Panggilan video dukungan pelanggan multibahasa",
    "Sesi pendidikan dan pelatihan internasional",
    
    // Performa Teknis
    "Konferensi video dalam kondisi jaringan buruk",
    "Performa terjemahan apiMind vs Google Meet",
    "Fitur interpretasi apiMind vs Zoom",
    "Akurasi pengenalan suara di berbagai aksen",
    "Kebutuhan bandwidth untuk panggilan yang diinterpretasi AI",
    
    // ROI Bisnis & Ekonomi
    "Perbandingan biaya: interpretasi AI vs penerjemah manusia",
    "ROI implementasi teknologi akses bahasa",
    "Biaya tersembunyi hambatan bahasa dalam bisnis",
    "Penghematan waktu dengan terjemahan AI instan",
    "Mengurangi biaya miskomunikasi dalam kesepakatan internasional",
    
    // Kepatuhan & Regulasi
    "Hukum akses bahasa di Amerika Serikat (Title VI, ADA, LEP)",
    "Kepatuhan GDPR untuk platform video multibahasa",
    "Regulasi akses bahasa kesehatan (Section 1557)",
    "Kedaulatan data dalam layanan terjemahan cloud",
    
    // Analisis Kompetitif
    "Keterbatasan terjemahan real-time Microsoft Teams",
    "Caption otomatis Google Meet vs interpretasi AI",
    "Perbandingan fitur terjemahan Zoom",
    "LSP tradisional vs platform interpretasi AI",
    
    // Tren Teknologi
    "Masa depan interpretasi simultan dengan AI",
    "Terjemahan AI multimodal (suara + konteks visual)",
    "Kecerdasan emosional dalam interpretasi AI",
    "Edge computing untuk interpretasi latensi rendah",
    
    // Kisah Sukses & Studi Kasus
    "Bagaimana perusahaan meningkatkan penjualan internasional dengan interpretasi AI",
    "Mengurangi biaya penerjemah hingga 80% dengan AI",
    "Adopsi universitas terhadap interpretasi AI untuk aksesibilitas",
    "Peningkatan kepuasan pasien LEP sistem rumah sakit",
  ]
</script>

<AIChat :prompts="chatPrompts" />
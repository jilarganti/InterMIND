<script setup>
  const chatPrompts = [
    // Pencarian berbasis masalah - Hambatan bahasa dalam bisnis
    "Alternatif penerjemah manusia yang mahal",
    "Cara berkomunikasi dengan klien asing tanpa mengetahui bahasa mereka",
    "Terjemahan real time untuk rapat bisnis",
    "Software penerjemah panggilan video",
    "Kehilangan kesepakatan karena hambatan bahasa",
    
    // Skenario bisnis spesifik
    "Cara presentasi kepada klien internasional",
    "Melakukan demo produk dalam berbagai bahasa",
    "Praktik terbaik rapat penjualan internasional",
    "Berkomunikasi dengan pemasok dari berbagai negara",
    
    // Pencarian solusi
    "Perbandingan terjemahan AI vs penerjemah manusia",
    "Terjemahan bahasa instan untuk bisnis",
    "Alat kolaborasi tim multibahasa",
    
    // Pencarian kebutuhan teknis
    "Akurasi terjemahan untuk diskusi teknis",
    "Software terjemahan aman untuk perusahaan",
    "Integrasi dengan video conference yang ada",
    "Layanan terjemahan yang mematuhi GDPR",
    
    // ROI dan nilai bisnis
    "Biaya miskomunikasi dalam bisnis internasional",
    "Menghitung biaya penerjemah vs solusi AI",
    "Meningkatkan tingkat konversi penjualan internasional",
    "Ekspansi global tanpa pelatihan bahasa",
    
    // Pencarian perbandingan kompetitor
    "Keterbatasan terjemahan Google Meet",
    "Masalah terjemahan subtitle Zoom",
    "Masalah kualitas terjemahan Microsoft Teams",
    
    // Pencarian spesifik industri
    "Komunikasi manufaktur dengan pemasok luar negeri",
    "Solusi bahasa bisnis ekspor",
  ]
</script>

<AIChat :prompts="chatPrompts" />
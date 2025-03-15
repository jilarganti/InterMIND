---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
const chatPrompts = [
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Tiket Dubai Frame", category: "attractions" },
  { id: "3", text: "Tiket Burj Khalifa", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Restoran Dubai Mall", category: "food" },
  { id: "8", text: "Makanan Arab Terbaik di Dubai", category: "food" },
  { id: "9", text: "Restoran Bintang Michelin Dubai", category: "food" },
  { id: "10", text: "Makanan Jalanan Sharjah", category: "food" },
  { id: "11", text: "Sewa di Palm Jumeirah", category: "housing" },
  { id: "12", text: "Apartemen Dubai Marina", category: "housing" },
  { id: "13", text: "Perumahan Terjangkau Abu Dhabi", category: "housing" },
  { id: "14", text: "Hukum Sewa UAE", category: "housing" },
  { id: "15", text: "Peta Metro Dubai", category: "transportation" },
  { id: "16", text: "Tarif Taksi Abu Dhabi", category: "transportation" },
  { id: "17", text: "SIM UAE", category: "transportation" },
  { id: "18", text: "Layanan RTA Dubai", category: "transportation" },
  { id: "19", text: "Belanja di Dubai Mall", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Dubai Gold Souk", category: "shopping" },
  { id: "22", text: "Promo Mall of Emirates", category: "shopping" },
  { id: "23", text: "Pendirian Bisnis UAE", category: "business" },
  { id: "24", text: "Dubai Free Zones", category: "business" },
  { id: "25", text: "Pendaftaran Perusahaan UAE", category: "business" },
  { id: "26", text: "Visa Freelance UAE", category: "business" },
  { id: "27", text: "Persyaratan Visa UAE", category: "travel" },
  { id: "28", text: "Tempat Wisata Dubai", category: "travel" },
  { id: "29", text: "Aplikasi Visa Kunjungan UAE", category: "travel" },
  { id: "30", text: "Tempat Wisata Abu Dhabi", category: "travel" },
  { id: "31", text: "Safari Gurun Dubai", category: "travel" },
  { id: "32", text: "Lowongan Kerja Ekspatriat Dubai", category: "jobs" },
  { id: "33", text: "Proses Izin Kerja UAE", category: "jobs" },
  { id: "34", text: "Pekerjaan Remote di UAE", category: "jobs" },
  { id: "35", text: "Panduan Gaji UAE", category: "jobs" },
  { id: "36", text: "Prakiraan Cuaca UAE", category: "events" },
  { id: "37", text: "Acara Mendatang Dubai", category: "events" },
  { id: "38", text: "Perayaan Hari Nasional UAE", category: "events" },
  { id: "39", text: "Festival Belanja Dubai", category: "events" },
  { id: "40", text: "Perpanjangan Emirates ID", category: "services" },
  { id: "41", text: "Layanan Perbankan UAE", category: "services" },
  { id: "42", text: "Pembayaran Tagihan DEWA", category: "services" },
  { id: "43", text: "Upgrade Paket Etisalat", category: "services" },
  { id: "44", text: "Sekolah Terbaik di Dubai", category: "education" },
  { id: "45", text: "Penerimaan Universitas UAE", category: "education" },
  { id: "46", text: "Peringkat Sekolah KHDA", category: "education" },
  { id: "47", text: "Asuransi Kesehatan UAE", category: "healthcare" },
  { id: "48", text: "Rumah Sakit Terbaik di Dubai", category: "healthcare" },
  { id: "49", text: "Pemeriksaan Kesehatan UAE", category: "healthcare" },
  { id: "50", text: "Layanan DHA", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />
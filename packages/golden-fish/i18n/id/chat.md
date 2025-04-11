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
  // Layanan Bisnis (blok pertama)
  { id: "1", text: "Pendaftaran perusahaan di UAE", category: "business" },
  { id: "2", text: "Pendirian perusahaan Mainland", category: "business" },
  { id: "3", text: "Pendaftaran perusahaan Free zone", category: "business" },
  { id: "4", text: "Pembentukan perusahaan Offshore", category: "business" },
  { id: "5", text: "Visa freelance UAE", category: "business" },
  { id: "6", text: "Lisensi bisnis Dubai", category: "business" },
  { id: "7", text: "Persyaratan lisensi dagang UAE", category: "business" },
  { id: "23", text: "Pendirian bisnis UAE", category: "business" },
  { id: "24", text: "Free zones Dubai", category: "business" },
  { id: "25", text: "Pendaftaran perusahaan UAE", category: "business" },
  { id: "26", text: "Visa freelance UAE", category: "business" },
  
  // Visa dan Imigrasi
  { id: "8", text: "Pengajuan Golden Visa UAE", category: "visa" },
  { id: "9", text: "Visa kerja UAE", category: "visa" },
  { id: "10", text: "Sponsor visa keluarga di UAE", category: "visa" },
  { id: "11", text: "Persyaratan tes medis visa", category: "visa" },
  { id: "12", text: "Proses visa tinggal UAE", category: "visa" },
  { id: "27", text: "Persyaratan visa UAE", category: "visa" },
  
  // Hukum dan Dokumen
  { id: "13", text: "Pengajuan Emirates ID", category: "legal" },
  { id: "14", text: "Legalisasi dokumen UAE", category: "legal" },
  { id: "15", text: "Surat Kuasa di UAE", category: "legal" },
  { id: "16", text: "Peninjauan kontrak bisnis UAE", category: "legal" },
  { id: "40", text: "Perpanjangan Emirates ID", category: "legal" },
  
  // Layanan Keuangan
  { id: "17", text: "Rekening bank korporat UAE", category: "finance" },
  { id: "18", text: "Pendaftaran pajak UAE (VAT)", category: "finance" },
  { id: "19", text: "Layanan akuntansi di UAE", category: "finance" },
  { id: "20", text: "Peraturan Substansi Ekonomi UAE", category: "finance" },
  { id: "41", text: "Layanan perbankan UAE", category: "finance" },
  
  // Properti dan Layanan
  { id: "21", text: "Investasi properti UAE", category: "property" },
  { id: "22", text: "Sewa ruang kantor Dubai", category: "property" },

  // Kesehatan
  { id: "47", text: "Asuransi kesehatan UAE", category: "healthcare" },
  { id: "48", text: "Rumah sakit terbaik di Dubai", category: "healthcare" },
  { id: "49", text: "Pemeriksaan kesehatan UAE", category: "healthcare" },
  
  // Pariwisata dan Hiburan (di akhir)
  { id: "28", text: "Objek wisata Dubai", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Tiket Dubai Frame", category: "attractions" },
  { id: "31", text: "Tiket Burj Khalifa", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Belanja di Dubai Mall", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>
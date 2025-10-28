---
title: Privasi Data untuk Pertemuan AI
description: Arsitektur privasi transparan InterMIND dengan kerahasiaan berbasis wilayah, kepatuhan GDPR, dan pilihan pengguna untuk lokasi pemrosesan data.
---

# Privasi Data untuk Pertemuan AI

## Pengantar

InterMind adalah platform untuk pertemuan video multibahasa dengan interpretasi langsung bertenaga AI. Kami dibangun untuk para profesional — di mana bukan hanya pesan yang penting, tetapi juga privasi pesan tersebut.

Untuk memberikan pengalaman yang mulus, InterMind mengintegrasikan layanan pihak ketiga untuk video, audio, penyimpanan cloud, interpretasi real-time, dan analitik. Penyedia pihak ketiga ini membantu kami memastikan kinerja dan skalabilitas — tetapi mereka juga memperkenalkan lapisan yang tidak dapat kami kontrol secara langsung.

Pelajari lebih lanjut tentang [how our platform works](./how-it-works) dan [video meeting features](./video-meeting-platform) kami.

Kami percaya pada **transparansi daripada janji**. Kami hanya dapat menjamin privasi dan keamanan untuk komponen yang berada di bawah kontrol langsung kami — perangkat lunak kami, logika antarmuka, dan cara kami merutekan data. Untuk yang lainnya, kami menawarkan Anda **kekuatan untuk memilih**.

Inilah mengapa kami merancang InterMind dengan **kerahasiaan berbasis wilayah**: Anda memilih di mana data Anda diproses, kerangka hukum mana yang mengaturnya, dan model AI mana yang digunakan — berdasarkan zona privasi yang Anda pilih.

> **Apa itu Zona Privasi?**  
> _Wilayah yang dapat dikonfigurasi (EU, US, Asia) yang mengatur di mana data Anda diproses dan di bawah kerangka hukum yang mana._

## Prinsip Privasi Inti

### 1. **Model Tanggung Jawab Terbagi**

- InterMind **tidak memiliki atau mengoperasikan** infrastruktur cloud yang mendasari atau LLM (large language models).
- Kami tidak menyimpan file media Anda, dan kami juga tidak memproses ucapan Anda secara langsung untuk pelatihan model.
- Kami **mengendalikan** perangkat lunak sisi klien, aturan perutean, dan logika kepatuhan — termasuk wilayah mana yang dilalui data Anda, model apa yang digunakan, dan dalam kondisi apa.

### 2. **Transparansi Arsitektur**

- Anda dapat melihat secara eksplisit wilayah mana yang aktif untuk sesi Anda, dan hukum mana yang berlaku (misalnya GDPR di Eropa, CCPA di AS, PDPL di UAE).
- Setiap sesi berjalan dalam **mode kepatuhan** yang ditentukan, dan konfigurasi ini dapat dilihat dan diaudit.

### 3. **Privasi secara Default**

- InterMind **tidak pernah** menyimpan atau menggunakan kembali konten Anda untuk pelatihan, profiling, atau analisis komersial.
- Kami tidak menyimpan transkrip atau media kecuali Anda secara eksplisit memintanya.
- Jika Anda menonaktifkan interpretasi, **tidak ada data pengguna yang meninggalkan perangkat Anda sama sekali**.

## Kerahasiaan Berbasis Wilayah: Cara Kerjanya

Di awal setiap sesi, atau sebagai bagian dari pengaturan akun organisasi Anda, Anda dapat memilih zona privasi yang diinginkan:

| Wilayah       | Hukum yang Berlaku                                                                            | Infrastruktur                  | Penyedia LLM               |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Eropa         | [GDPR](https://gdpr.eu)                                                                       | Pusat data EU saja             | Dihosting EU atau patuh EU |
| Amerika Serikat | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                     | AWS / GCP / Azure (AS)         | OpenAI AS / Anthropic AS   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Cloud UAE atau Bahrain         | LLM regional atau patuh    |
| Asia / Tiongkok | Hukum privasi lokal Tiongkok                                                                | Alibaba, Huawei, Tencent Cloud | LLM berbasis Tiongkok saja |

Pilihan ini mengatur bagaimana video, audio, dan konten yang diinterpretasikan diproses dan melalui yurisdiksi mana.

Anda dapat:

- **Menetapkan wilayah default** untuk organisasi Anda
- **Mengganti wilayah per sesi**
- **Memasukkan wilayah tertentu ke daftar hitam** sepenuhnya

## Apa yang Dijamin oleh InterMind

Kami menerapkan perlindungan teknis dan hukum yang ketat dalam domain kendali kami:

### 1. **Eksekusi Lokal Terlebih Dahulu**

Fungsi sisi klien seperti penangkapan suara dan rendering UI ditangani secara lokal kapan pun memungkinkan.

### 2. **Minimalisasi Data**

Hanya data minimum yang diperlukan untuk tugas saat ini yang ditransmisikan.

### 3. **Enkripsi End-to-End**

Semua data audio/video ditransmisikan melalui saluran terenkripsi. Permintaan interpretasi disalurkan melalui proxy aman, menghindari paparan publik.

### 4. **Tidak Ada Penyimpanan Default**

Kami tidak menyimpan rapat, transkrip, atau percakapan Anda kecuali Anda memilih untuk ikut serta. Semua penyimpanan terikat wilayah.

## Kepatuhan Hukum & Regulasi

InterMind mendukung kompatibilitas penuh dengan:

- **GDPR** — Hak untuk mengakses, penghapusan, ekspor, dan pembatasan pemrosesan. Tanpa profiling AI.
- **CCPA** — Tidak ada penjualan data pribadi, opsi keluar, dan praktik pengumpulan yang transparan.
- **UAE PDPL** — Penyimpanan lokal jika diminta, kontrol akses ketat, tidak ada transfer internasional tanpa persetujuan.
- **China DSL/PIPL** — Pemrosesan hanya di dalam wilayah, tidak ada routing asing jika China dipilih.

## Apa yang Dapat dan Tidak Dapat Kami Jamin

Kami berkomitmen untuk transparansi penuh, bukan hanya bahasa hukum.

> InterMind tidak dapat menjamin bagaimana LLM pihak ketiga atau penyedia infrastruktur memproses data setelah keluar dari kendali kami.

### Kami TIDAK menjamin:

- Bahwa OpenAI, Anthropic, atau penyedia LLM lainnya tidak akan mencatat atau menyimpan data input.
- Bahwa host cloud tidak memiliki akses ke media yang dialirkan melalui sistem mereka (kecuali Anda menggunakan secure enclave atau deployment enterprise).
- Bahwa konten yang diteruskan ke model pihak ketiga berada di luar cakupan pelatihan mereka (kecuali di bawah kontrak pribadi).

### Kami menjamin:

- Anda selalu mengetahui **di mana dan bagaimana** data Anda diproses.
- Anda memiliki alat untuk **mengontrol risiko** dengan memilih wilayah dan mode kepatuhan Anda.
- InterMind **tidak pernah** menyimpan atau mengeksploitasi konten Anda — bahkan sementara — tanpa persetujuan Anda.

## Mode Kepercayaan & Tingkat Privasi

Anda dapat menyesuaikan sesi Anda agar sesuai dengan kebutuhan kerahasiaan Anda:

| Mode Kepercayaan | Interpretasi | Transfer Lintas Wilayah | Penyimpanan        | Terbaik Untuk                              |
| ---------------- | ------------ | ----------------------- | ------------------ | ------------------------------------------ |
| 🔒 Lokal Saja    | ❌           | ❌                      | ❌                 | Hukum, pemerintah, tinjauan internal      |
| 🔐 Terkunci Wilayah | ✅        | ✅ (dalam zona saja)    | ❌ atau sesi saja  | Kesehatan, keuangan, SDM                  |
| 🌐 Fleksibel Global | ✅        | ✅ (multi-wilayah)      | ✅                 | Dukungan, penjualan, tim multinasional   |

## Apa yang Anda Dapatkan Langsung

- Penggunaan LLM spesifik wilayah, dengan transparansi real-time.
- Tidak ada pelatihan atau profiling konten Anda — selamanya.
- Nol transmisi data jika interpretasi dimatikan.
- Penyimpanan data opsional, selalu terikat wilayah.
- Alat audit dan ekspor lengkap untuk klien enterprise.

## Kesimpulan

> Privasi bukanlah janji — ini adalah arsitektur.

InterMind tidak bersembunyi di balik jaminan yang samar. Sebaliknya, kami memberi Anda **pilihan**, **visibilitas**, dan **kontrol**.

- Anda memilih wilayah Anda.
- Anda memilih tingkat interpretasi Anda.
- Anda memutuskan risiko apa yang bersedia Anda terima — dan kami membantu Anda tetap patuh di setiap tingkat.

**InterMind — dibangun untuk profesional, didukung oleh kepatuhan, diatur oleh kepercayaan.**

> **Pertanyaan tentang privasi?** [Contact us](../../resources/company/contacts) atau baca tentang [our company values](../../resources/company/about).
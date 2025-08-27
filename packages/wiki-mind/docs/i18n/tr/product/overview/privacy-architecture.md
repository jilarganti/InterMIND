# AI Toplantıları için Veri Gizliliği

## Giriş

InterMind, canlı AI destekli çeviri ile çok dilli video toplantılar için bir platformdur. Profesyoneller için tasarlandık — sadece mesajın kendisinin değil, o mesajın gizliliğinin de önemli olduğu yerlerde.

Kesintisiz bir deneyim sunmak için InterMind, video, ses, bulut depolama, gerçek zamanlı çeviri ve analitik için üçüncü taraf hizmetleri entegre eder. Bu üçüncü taraf sağlayıcılar performans ve ölçeklenebilirlik sağlamamıza yardımcı olur — ancak aynı zamanda doğrudan kontrol edemediğimiz bir katman da sunarlar.

**Vaatler yerine şeffaflığa** inanıyoruz. Sadece doğrudan kontrolümüz altındaki bileşenler için gizlilik ve güvenlik garanti edebiliriz — yazılımımız, arayüz mantığımız ve verileri nasıl yönlendirdiğimiz. Diğer her şey için size **seçim gücü** sunuyoruz.

Bu nedenle InterMind'ı **bölge tabanlı gizlilik** ile tasarladık: verilerinizin nerede işlendiğini, hangi yasal çerçevenin onu yönettiğini ve hangi AI modellerinin kullanıldığını — seçtiğiniz gizlilik bölgesine göre siz seçersiniz.

> **Gizlilik Bölgesi Nedir?**  
> _Verilerinizin nerede işlendiğini ve hangi yasal çerçeve altında olduğunu yöneten yapılandırılabilir bir bölge (AB, ABD, Asya)._

## Temel Gizlilik İlkeleri

### 1. **Bölünmüş Sorumluluk Modeli**

- InterMind, temel bulut altyapısına veya LLM'lere (büyük dil modelleri) **sahip değildir veya bunları işletmez**.
- Medya dosyalarınızı saklamayız ve konuşmanızı model eğitimi için doğrudan işlemeyiz.
- İstemci tarafı yazılımı, yönlendirme kuralları ve uyumluluk mantığını **kontrol ediyoruz** — verilerinizin hangi bölgeden aktığı, hangi modelin kullanıldığı ve hangi koşullar altında olduğu dahil.

### 2. **Mimari Şeffaflık**

- Oturumunuz için hangi bölgenin aktif olduğunu ve hangi yasaların geçerli olduğunu açıkça görebilirsiniz (örneğin Avrupa'da GDPR, ABD'de CCPA, BAE'de PDPL).
- Her oturum belirlenmiş bir **uyumluluk modunda** çalışır ve bu yapılandırma görünür ve denetlenebilir.

### 3. **Varsayılan Olarak Gizlilik**

- InterMind içeriğinizi eğitim, profilleme veya ticari analiz için **asla** saklamaz veya yeniden kullanmaz.
- Açıkça talep etmediğiniz sürece transkriptleri veya medyayı saklamayız.
- Çeviriyi devre dışı bırakırsanız, **hiçbir kullanıcı verisi cihazınızdan ayrılmaz**.

## Bölge Tabanlı Gizlilik: Nasıl Çalışır

Her oturumun başında veya kuruluşunuzun hesap ayarlarının bir parçası olarak, tercih edilen bir gizlilik bölgesi seçebilirsiniz:

| Bölge         | Geçerli Yasalar                                                                               | Altyapı                        | LLM Sağlayıcıları          |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Avrupa        | [GDPR](https://gdpr.eu)                                                                       | Yalnızca AB veri merkezleri    | AB\'de barındırılan veya AB uyumlu  |
| Amerika Birleşik Devletleri | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (ABD)        | OpenAI US / Anthropic US   |
| BAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | BAE veya Bahreyn bulutu        | Bölgesel veya uyumlu LLM\'ler |
| Asya / Çin    | Yerel Çin gizlilik yasaları                                                                  | Alibaba, Huawei, Tencent Cloud | Yalnızca Çin merkezli LLM\'ler      |

Bu seçim, video, ses ve yorumlanan içeriğinizin nasıl işlendiğini ve hangi yargı yetkisi altında olduğunu belirler.

Şunları yapabilirsiniz:

- **Kuruluşunuz için varsayılan bir bölge ayarlayın**
- **Oturum başına bölgeyi geçersiz kılın**
- **Belirli bölgeleri tamamen kara listeye alın**

## InterMind'ın Garantileri

Kontrol alanımızda katı teknik ve yasal güvenlik önlemleri uyguluyoruz:

### 1. **Önce Yerel Yürütme**

Ses yakalama ve kullanıcı arayüzü oluşturma gibi istemci tarafı işlevler mümkün olduğunca yerel olarak gerçekleştirilir.

### 2. **Veri Minimizasyonu**

Yalnızca mevcut görev için gerekli olan minimum veri iletilir.

### 3. **Uçtan Uca Şifreleme**

Tüm ses/video verileri şifrelenmiş kanallar aracılığıyla iletilir. Çeviri istekleri güvenli proxy'ler üzerinden tünellenir ve genel maruziyetten kaçınılır.

### 4. **Varsayılan Depolama Yok**

Siz kabul etmedikçe toplantılarınızı, transkriptlerinizi veya konuşmalarınızı depolamayız. Tüm depolama bölge sınırlıdır.

## Yasal ve Düzenleyici Uyumluluk

InterMind aşağıdakilerle tam uyumluluk sağlar:

- **GDPR** — Erişim, silme, dışa aktarma ve işleme kısıtlama hakkı. AI profilleme yapılmaz.
- **CCPA** — Kişisel veri satışı yapılmaz, vazgeçme seçenekleri ve şeffaf toplama uygulamaları.
- **UAE PDPL** — Talep edilirse yerel depolama, sıkı erişim kontrolleri, izin olmadan uluslararası transfer yapılmaz.
- **China DSL/PIPL** — Sadece bölge içi işleme, Çin seçilirse yabancı yönlendirme yapılmaz.

## Neleri Garanti Edebilir ve Edemeyiz

Sadece hukuki jargon değil, tam dürüstlüğe kararlıyız.

> InterMind, veriler kontrolümüzden çıktıktan sonra üçüncü taraf LLM'lerin veya altyapı sağlayıcılarının verileri nasıl işlediğini garanti edemez.

### Garanti ETMEDİĞİMİZ durumlar:

- OpenAI, Anthropic veya diğer LLM sağlayıcılarının girdi verilerini kaydetmeyeceği veya saklamayacağı.
- Bulut barındırıcılarının sistemleri üzerinden aktarılan medyaya erişimi olmadığı (güvenli bir enclave veya kurumsal dağıtım kullanmadığınız sürece).
- Üçüncü taraf modele aktarılan içeriğin onların eğitim kapsamı dışında olduğu (özel sözleşme altında olmadığı sürece).

### Garanti ETTİĞİMİZ durumlar:

- Verilerinizin **nerede ve nasıl** işlendiğini her zaman bilirsiniz.
- Bölgenizi ve uyumluluk modunuzu seçerek **riski kontrol etme** araçlarına sahipsiniz.
- InterMind içeriğinizi rızanız olmadan **asla** saklamaz veya istismar etmez — geçici olarak bile.

## Güven Modları ve Gizlilik Seviyeleri

Oturumunuzu gizlilik ihtiyaçlarınıza uyacak şekilde özelleştirebilirsiniz:

| Güven Modu       | Yorumlama | Bölgeler Arası Transfer | Depolama           | En İyi Kullanım Alanı               |
| ---------------- | --------- | ----------------------- | ------------------ | ----------------------------------- |
| 🔒 Yalnızca Yerel | ❌        | ❌                      | ❌                 | Hukuk, devlet, dahili incelemeler   |
| 🔐 Bölge Kilitli  | ✅        | ✅ (yalnızca bölge içi) | ❌ veya oturum-sadece | Sağlık, finans, İK               |
| 🌐 Küresel Esnek  | ✅        | ✅ (çok bölgeli)        | ✅                 | Destek, satış, çok uluslu ekipler   |

## Kutunun İçinden Çıkanlar

- Gerçek zamanlı şeffaflık ile bölgeye özel LLM kullanımı.
- İçeriğinizin eğitimi veya profillemesi asla yapılmaz.
- Yorumlama kapalıysa sıfır veri aktarımı.
- İsteğe bağlı veri depolama, her zaman bölge sınırları içinde.
- Kurumsal müşteriler için tam denetim ve dışa aktarma araçları.

## Sonuç

> Gizlilik bir söz değil — bir mimaridir.

InterMind belirsiz güvenceler arkasına saklanmaz. Bunun yerine size **seçenekler**, **görünürlük** ve **kontrol** sunar.

- Bölgenizi siz seçersiniz.
- Yorumlama seviyenizi siz seçersiniz.
- Kabul etmeye istekli olduğunuz riski siz belirlersiniz — ve her seviyede uyumlu kalmanızda size yardımcı oluruz.

**InterMind — profesyoneller için inşa edildi, uyumluluk ile desteklendi, güven ile yönetildi.**
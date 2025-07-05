# Kullanıcı Rolleri

InterMIND, güvenli, işbirlikçi ve uyarlanabilir toplantı deneyimlerini geliştirmek için titizlikle tasarlanmış dört farklı kullanıcı rolü tanımlar. Host rolü en yüksek yetki düzeyine sahipken, diğer roller değişen düzeylerde etkileşim sunar.

## Ev Sahibi

Ev Sahibi toplantıyı başlatmaktan sorumludur ve kapsamlı yönetici ayrıcalıklarına sahiptir.

**Temel Yetenekler:**

- Toplantıları başlatma ve sonlandırma
- Herhangi bir katılımcıyı sessize alma
- Moderatörleri yükseltme veya düşürme
- Kayıtları başlatma ve durdurma
  - Bu, Moderatör tarafından başlatılan tüm kayıtları kapsar
- Herhangi bir katılımcıyı aramadan çıkarma
- Misafirleri kabul etme veya reddetme
- Toplantı geçmişine erişim
- Herhangi bir AI özelliğini kullanma
- Kişisel ayarları, düzeni, bulanıklaştırmayı ve görünüm seçeneklerini ayarlama

## Moderatör

Moderatörler, oturumu etkili bir şekilde yönetmeye yardımcı olmak için Ana Bilgisayar tarafından atanır.

**Temel Yetkiler:**

- Herhangi bir katılımcıyı sessize alma
- Kayıtları başlatma ve durdurma
  - Bu, Ana Bilgisayar tarafından başlatılan tüm kayıtları içerir
- Konukları kabul etme veya reddetme
- Ana Bilgisayar hariç herhangi bir katılımcıyı aramadan çıkarma
- Çevrimiçi Ses Çevirmenini kullanma ve dil değiştirme (kendi sesleri için)
- AI Asistanını kullanma (kendi görünümleri için)
- Sohbete katılma, el kaldırma veya indirme
- Transkriptlere ve toplantı geçmişine erişim
- Diğer moderatörleri yükseltme veya düşürme

## Katılımcı (Yetkili Kullanıcı)

Yetkili katılımcılar, özel ayrıcalıkları olmadan toplantıya katılan oturum açmış kullanıcılardır.

**Temel Yetenekler:**

- Kendi mikrofonlarını sessize alma veya açma
- Kendi kameralarını etkinleştirme veya devre dışı bırakma
- Ekranlarını paylaşma (masaüstü tarayıcısı)
- AI Asistanını kullanma (kendi görünümleri için)
- Çevrimiçi Ses Çevirmenini kullanma ve dil değiştirme (kendi sesleri için)
- Kişisel düzen ve ayarları değiştirme
- Sohbet, el kaldırma, transkriptler ve toplantı geçmişine erişim

## Misafir (Anonim Kullanıcı)

Misafirler, toplantıya giriş yapmadan katılan kullanıcılardır.

**Temel Yetenekler:**

- Kendi mikrofonlarını ve kameralarını kullanabilme
- Ekranlarını paylaşabilme (masaüstü tarayıcısı)
- Çevrimiçi Ses Çevirmenini kullanabilme ve dil değiştirebilme (kendi sesleri için)
- Düzen ve görüntüleme seçeneklerini kullanabilme (yalnızca kişisel)
- Sohbete katılabilme ve el kaldırabilme

> [!WARNING]
> Misafirler diğer katılımcıları yönetemez.

## Rol İzinleri Özet Tablosu

| Özellik                        | Ev Sahibi | Moderatör | Katılımcı | Misafir |
| ------------------------------ | --------- | --------- | --------- | ------- |
| Toplantı Başlatma              | ✅        | ❌        | ❌        | ❌      |
| Herhangi Bir Katılımcıyı Susturma | ✅    | ✅        | ❌        | ❌      |
| Herhangi Bir Katılımcının Sesini Açma | ❌ | ❌        | ❌        | ❌      |
| Kendi Mikrofonunu Susturma/Açma | ✅       | ✅        | ✅        | ✅      |
| Kendi Kamerasını Açma/Kapatma  | ✅        | ✅        | ✅        | ✅      |
| Kayıt Başlatma/Durdurma        | ✅        | ✅        | ❌        | ❌      |
| Ekran Paylaşımı (Masaüstü)     | ✅        | ✅        | ✅        | ✅      |
| AI Asistanı Kullanma           | ✅        | ✅        | ✅        | ❌      |
| Çevrimiçi Çeviri Kullanma      | ✅        | ✅        | ✅        | ✅      |
| Çeviri Dilini Değiştirme       | ✅        | ✅        | ✅        | ✅      |
| El Kaldırma / İndirme          | ✅/✅     | ✅/✅     | ✅/❌     | ✅/❌   |
| Düzen / Ayarları Değiştirme    | ✅        | ✅        | ✅        | ✅      |
| Arka Plan Bulanıklığını Açma/Kapatma | ✅ | ✅        | ✅        | ✅      |
| Misafir Kabul Etme/Reddetme    | ✅        | ✅        | ❌        | ❌      |
| Toplantı Geçmişine Erişim      | ✅        | ✅        | ✅        | ❌      |
| Katılımcıları Çıkarma          | ✅        | ✅        | ❌        | ❌      |
| Moderatör Yükseltme/İndirme    | ✅        | ✅        | ❌        | ❌      |
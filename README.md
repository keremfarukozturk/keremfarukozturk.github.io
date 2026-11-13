# keremfarukozturk.github.io

Kerem Faruk Öztürk'ün kişisel web sitesi: yazılar, projeler ve notlar.
**AI runs on silicon and is powered by electricity. I'm learning these layers.**
*Yapay zekâ silikonda çalışır, elektrikle beslenir. Ben bu katmanları öğreniyorum.*

Site [Jekyll](https://jekyllrb.com/) ile yazıldı ve GitHub Pages tarafından ücretsiz olarak derlenip yayınlanır. Ek bir derleme hattı, Node.js ya da dış kütüphane yoktur.

---

## Diller

Site iki dillidir. **Varsayılan dil İngilizce**; Türkçe sürüm `/tr/` altındadır. Her sayfanın sağ üstündeki `EN / TR` düğmesi, sayfanın diğer dildeki karşılığına götürür.

| İngilizce | Türkçe |
|---|---|
| `/` | `/tr/` |
| `/about/` | `/tr/hakkimda/` |
| `/projects/` | `/tr/projeler/` |
| `/writing/` | `/tr/yazilar/` |
| `/log/` | `/tr/gunluk/` |

- Eski Türkçe adresler (`/hakkimda/`, `/projeler/`, `/yazilar/`) yeni adreslerine otomatik yönlenir.
- İki sayfanın birbirinin çevirisi olduğunu, ön bilgilerine yazılan **aynı `ref` değeri** belirtir. Örneğin `about.md` ve `tr/hakkimda.md` dosyalarının ikisinde de `ref: about` yazar.
- Bir yazı ya da projenin çevirisi yoksa dil düğmesi, diğer dildeki liste sayfasına götürür. Bu yüzden her yazıyı iki dilde yazmak zorunlu değildir.

## Klasör yapısı

```
_config.yml           Site ayarları: isim, e-posta, sosyal bağlantılar, dil kuralları
_data/ui.yml          Arayüz metinleri, iki dilde (menü, "Yakında" metinleri, ay adları)
_data/categories.yml  Kategoriler, iki dildeki adları ve ikonları
_data/now.yml         Hakkımda sayfasındaki "Şimdi / Sıradaki" maddeleri
_data/log.yml         Mühendislik günlüğü kayıtları
_layouts/             Sayfa şablonları: default, home, page, post, project
_includes/            Tekrar kullanılan parçalar: başlık, dil düğmesi, tarih, kartlar, iletişim
_posts/en/, _posts/tr/        Yazılar (her yazı tek bir .md dosyası)
_projects/en/, _projects/tr/  Projeler (her proje tek bir .md dosyası)
index.html, about.md, projects/, writing/, log/   İngilizce sayfalar
tr/                   Türkçe sayfalar
assets/css/main.css   Tasarım sistemi (fontlar dahil, tek dosya)
assets/fonts/         IBM Plex fontları (OFL lisansı, siteyle birlikte barındırılır)
assets/js/            motion.js (kaydırma animasyonları), intro.js (giriş animasyonu)
assets/vendor/katex/  Formül desteği (MIT lisansı, yalnızca `math: true` sayfalarda yüklenir)
assets/og-en.png, og-tr.png   Link paylaşıldığında görünen önizleme görselleri
```

Bir dilde hiç proje ya da yazı yokken, o dilin sayfalarında otomatik olarak "Yakında" kutusu görünür. İlk dosya eklendiği anda kutu kendiliğinden kalkar.

## Yerelde önizleme (isteğe bağlı)

```bash
bundle install
bundle exec jekyll serve
```

Ardından tarayıcıda `http://localhost:4000` adresi açılır.

---

## İçerik ekleme rehberi

Yeni içerik eklemek için bilgisayara bir şey kurmak gerekmez. GitHub'da dosya oluşturmak yeterlidir:

1. GitHub'da depoyu aç ve doğru klasöre gir: İngilizce yazı için `_posts/en`, Türkçe yazı için `_posts/tr`; projeler için `_projects/en` ya da `_projects/tr`.
2. **Add file → Create new file** de.
3. Aşağıdaki şablonu yapıştır, doldur, **Commit changes** de.
4. Bir iki dakika içinde site güncellenir.

Dil, adres ve paylaşım görseli dosyanın bulunduğu klasöre göre **otomatik** atanır; ön bilgiye ayrıca dil yazılmaz.

### Yazı

Dosya adı: `YYYY-AA-GG-kisa-baslik.md`. Dosya adında Türkçe karakter ve boşluk kullanılmaz; sayfa adresi bu addan oluşur.

- `_posts/en/2026-12-01-memory-wall.md` → `/writing/memory-wall/`
- `_posts/tr/2026-12-01-bellek-duvari.md` → `/tr/yazilar/bellek-duvari/`

```markdown
---
title: "Bellek duvarı: yapay zekânın asıl darboğazı"
description: "Listede ve paylaşım önizlemesinde görünen tek cümlelik özet."
category: ai              # electronics | signals | software | ai | notes
ref: memory-wall          # isteğe bağlı; diğer dildeki çevirisiyle aynı değer
math: true                # formül varsa ekle, yoksa bu satırı sil
---

Yazının metni Markdown ile buraya gelir.

## Ara başlık

> Alıntı

Satır içi formül: $$ I = \frac{\text{FLOP}}{\text{bayt}} $$

$$
P = \min(P_{\max},\; I \cdot B)
$$
```

- Tarihi ileri bir gün olan yazı, o gün gelene kadar yayınlanmaz.
- Okuma süresi ve tarih, yazının dilinde otomatik yazılır.
- Blok formül için `$$ ... $$` öncesinde ve sonrasında boş satır bırakılmalıdır.

### Proje

Dosya adı: `kisa-ad.md`.

- `_projects/en/sensor-board.md` → `/projects/sensor-board/`
- `_projects/tr/sensor-karti.md` → `/tr/projeler/sensor-karti/`

Proje sayfaları bir **veri sayfası (datasheet)** düzenindedir: üstte belge numarası, revizyon, durum, tür ve güncelleme tarihi şeridi; sağda teknik özet tablosu; en altta revizyon geçmişi.

```markdown
---
title: "Düşük güçlü sensör kartı"
summary: "Hangi problemi nasıl çözdüğünü anlatan tek cümle."
doc: KFO-002              # belge numarası: KFO-001, KFO-002, … (her projeye bir numara)
rev: A                    # güncel revizyon harfi
updated: 2026-12-01       # son güncelleme tarihi
year: 2026
status: ongoing           # ongoing | completed  (sitede "Sürüyor / Tamamlandı" yazar)
type: electronics         # electronics | signals | software | ai — karttaki ikonu belirler
ref: sensor-board         # isteğe bağlı; diğer dildeki çevirisiyle aynı değer
order: 1                  # isteğe bağlı; küçük sayı en üstte. Yoksa yıla göre sıralanır
cover: /assets/img/projeler/sensor-karti/kapak.webp   # isteğe bağlı kapak; yoksa ikon görünür
stack:                    # isteğe bağlı — sağdaki "Teknik özet" tablosu
  Donanım: [STM32, INA219]
  Yazılım: [C, Python]
links:
  GitHub: https://github.com/keremfarukozturk/...
revisions:                # isteğe bağlı — en alttaki "Revizyon geçmişi"
  - { rev: A, date: 2026-12-01, note: "İlk mimari ve blok diyagramı" }
  - { rev: B, note: "Doğrulama sonuçları (planlanıyor)" }
---

## Problem
## Yaklaşım

{% include figure.html n=1 src="/assets/img/projeler/sensor-karti/blok.webp" caption="Blok diyagramı" %}

## Sonuç
```

- `figure.html`, görseli numaralı bir şekil olarak gösterir: "Şekil 1 — Blok diyagramı" (İngilizce sayfada "Figure 1"). Yazılarda da kullanılabilir.
- Belge numarası (`doc`) her proje için bir kez verilir ve değişmez; iki dildeki sürümler aynı numarayı kullanır.

### Görseller

- Klasör: `assets/img/projeler/<proje-adı>/` ya da `assets/img/yazilar/<yazı-adı>/`. İki dil aynı görselleri kullanabilir.
- Biçim: **WebP**, genişlik en fazla 1600px, dosya başına mümkünse 300 KB'ın altında.
- Proje kapakları (`cover:`) **16:10** oranında olmalıdır; kartlar aynı oranla gösterilir.
- Link paylaşıldığında görünen önizleme görseli dile göre `assets/og-en.png` ya da `assets/og-tr.png`'dir. Bir yazı ya da projeye özel önizleme için ön bilgiye `image: /assets/img/...png` eklenir (1200×630 PNG ya da JPG; WebP bazı platformlarda görünmez).
- Yazı içinde: `![Kısa açıklama](/assets/img/yazilar/bellek-duvari/grafik.webp)`
- Fotoğraf yüklemeden önce içindeki konum bilgisini (EXIF/GPS) silin.

### Mühendislik günlüğü (Log)

Kısa, tarihli notlar: ne denedin, ne bozuldu, ne öğrendin. Tam bir yazıdan çok daha kolay yazılır ve sitenin yaşadığını gösterir. Kayıtlar `_data/log.yml` dosyasına **en yenisi en üstte** olacak şekilde eklenir. Ana sayfada son üç kayıt görünür.

```yaml
- date: 2026-11-20
  tag: electronics        # electronics | signals | software | ai | notes
  en: "First cocotb test for the MAC unit; found an overflow bug."
  tr: "MAC birimi için ilk cocotb testi; bir taşma hatası buldum."   # isteğe bağlı
```

Türkçe metin yazılmazsa Türkçe sayfada İngilizcesi gösterilir.

### Yazılarda kenar notu ve etkileşimli şekil

- **Kenar notu:** Geniş ekranda metnin sağ kenarında, dar ekranda paragrafın altında görünür. Paragrafın içine yazılır:
  `…bant genişliğiyle sınırlanır.{% include sidenote.html n=1 text="Roofline modeli: …" %} Bu yüzden…`
- **Numaralı şekil:** `{% include figure.html n=1 src="/assets/img/…" caption="…" %}`
- **RC filtresi (etkileşimli):** `{% include rc-filter.html n=2 %}` — direnç ve kapasite kaydırıcılarıyla genlik yanıtını ve kesim frekansını canlı gösterir. Yeni etkileşimli şekiller aynı kalıpla `_includes/` altına eklenebilir.

### Şimdi ve sıradaki

Hakkımda sayfasındaki "Şimdi / Sıradaki" listeleri **tek bir dosyadan** okunur: `_data/now.yml`. Bir maddeyi orada değiştirdiğinde iki dildeki sayfa birlikte güncellenir.

```yaml
- when: now               # now (şimdi) | next (sıradaki)
  en: { title: "A small AI accelerator", text: "I'm starting work on …" }
  tr: { title: "Küçük bir yapay zekâ hızlandırıcısı", text: "… çalışmaya başlıyorum." }
```

### Kategoriler

Kategoriler, iki dildeki adları ve ikonları `_data/categories.yml` dosyasındadır. Yeni bir kategori eklemeden önce mevcut beşinden birine uyup uymadığına bakın; az kategori, düzenli bir site demektir.

### Site metinleri

- İsim, e-posta, sosyal bağlantılar: `_config.yml`
- Ana sayfa metinleri: `index.html` (İngilizce) ve `tr/index.html` (Türkçe) dosyalarının ön bilgisi
- Hakkımda: `about.md` ve `tr/hakkimda.md`. **Birini değiştirince diğerini de güncelleyin.**
- Menü, "Yakında" ve diğer arayüz metinleri: `_data/ui.yml` (iki dil)

---

## Stil rehberi

Sitenin şıklığı, birkaç kurala tutarlı biçimde uyulmasından gelir. Yeni bir şey eklerken bu kurallara bakın.

### 1. Tek imza öğesi
Sitenin tek dekoratif imzası **bej, yuvarlatılmış yatay çizgi**dir (`.bar`). Sayfa başlıklarının üstünde, aktif menü öğesinin altında, bölüm etiketlerinin yanında ve madde işaretlerinde kullanılır. Bunun dışında süs (ikon kalabalığı, numaralandırma, renkli rozet) eklenmez.

### 2. Renkler
Palet ASUS Marshmallow KW100 klavyesinin tonlarından türetildi. Tüm değerler `assets/css/main.css` dosyasının başındaki `:root` bloğunda tanımlı.

| Değişken | Değer | Kullanım |
|---|---|---|
| `--bg` | `#FBFAF7` | Zemin |
| `--white` | `#FFFFFF` | Kart yüzeyi |
| `--line` | `#ECE8E1` | İnce ayraçlar |
| `--tan` | `#C2AA8C` | **Yalnızca** imza çizgisi, link alt çizgisi, durum noktası |
| `--ink` | `#24211E` | Metin |
| `--soft` / `--faint` | `#6B655D` / `#736C64` | İkincil metin, tarih, etiket |

- Bej renk **metin rengi olarak kullanılmaz**; zemin üzerinde okunabilirlik eşiğinin altında kalır.
- Tüm metin renkleri WCAG AA kontrast eşiğini (4.5:1) geçer. Yeni renk eklenirse kontrastı kontrol edilmelidir.

### 3. Fontlar: tek aile, üç görev
- **IBM Plex Sans:** başlıklar ve arayüz.
- **IBM Plex Serif:** okuma metni (yazılar, açıklamalar).
- **IBM Plex Mono:** yalnızca küçük teknik bilgiler (tarih, etiket, kod).

Büyük başlıklarda mono font kullanılmaz.

### 4. Biçim
- Köşeler yumuşaktır: kartlarda 14px, küçük öğelerde 4–6px.
- Kartların altında 1px'lik ince bir kenar vardır; büyük gölge kullanılmaz.
- Tıklanabilen öğeler hafif kabarık görünür, tıklanamayanlar düzdür.

### 5. Hareket
- Animasyonlar **bir kez** oynar ve 1 saniyeden kısadır. Zıplama ya da sekme yoktur.
- Sitede tek bir sürekli animasyon vardır: ana sayfadaki giriş animasyonu.
- İşletim sisteminde "hareketi azalt" ayarı açık olan ziyaretçiler için bütün animasyonlar kapanır.
- Animasyon kütüphanesi kullanılmaz; yalnızca CSS ve birkaç satır JavaScript.

### 6. Koyu tema ve geçişler
- Koyu tema ("gece laboratuvarı") ziyaretçinin işletim sistemi ayarını izler; renkleri `main.css` başındaki `prefers-color-scheme: dark` bloğundadır. Yeni bir renk eklerken iki temaya da tanımlayın; renkleri doğrudan yazmak yerine değişken kullanın.
- Sayfa değişirken menüdeki bej çizgi yeni yerine kayar (View Transitions; desteklemeyen tarayıcılarda normal geçiş olur).

### 7. Boşluk
Bölümler arasında geniş boşluk (112px) bırakılır. Yoğun görünen bir sayfayı düzeltmenin ilk yolu, bir şey eklemek değil, bir şey çıkarmaktır.

---

## Lisans

Fontlar: IBM Plex, SIL Open Font License 1.1 (`assets/fonts/OFL-LICENSE.txt`).
Formüller: KaTeX 0.16.11, MIT (`assets/vendor/katex/LICENSE.txt`).

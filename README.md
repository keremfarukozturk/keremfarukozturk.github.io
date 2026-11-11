# keremfarukozturk.github.io

Kerem Faruk Öztürk'ün kişisel web sitesi: yazılar, projeler ve notlar.
**Sinyalden zekâya: her katmanı ciddiye alan bir mühendislik.**

Site [Jekyll](https://jekyllrb.com/) ile yazıldı ve GitHub Pages tarafından ücretsiz olarak derlenip yayınlanır. Ek bir derleme hattı, Node.js ya da dış kütüphane yoktur.

---

## Klasör yapısı

```
_config.yml          Site ayarları: isim, tanım, e-posta, sosyal bağlantılar
_data/ui.yml         Arayüz metinleri (menü, "Yakında" metinleri, ay adları)
_layouts/            Sayfa şablonları: default, page, post, project
_includes/           Tekrar kullanılan parçalar: head, header, footer, tarih, kartlar
_posts/              Yazılar (her yazı tek bir .md dosyası)
_projects/           Projeler (her proje tek bir .md dosyası)
assets/css/          main.css (tasarım sistemi) + fonts.css
assets/fonts/        IBM Plex fontları (OFL lisansı, siteyle birlikte barındırılır)
assets/js/           motion.js (kaydırma animasyonları), intro.js (giriş animasyonu)
assets/vendor/katex/ Formül desteği (MIT lisansı, yalnızca `math: true` sayfalarda yüklenir)
_data/categories.yml Kategoriler ve ikonları
index.html           Ana sayfa
hakkimda.md          Hakkımda + İletişim
projeler/, yazilar/  Liste sayfaları
```

Projeler ya da yazılar klasörü boşken ilgili bölümlerde otomatik olarak "Yakında" kutusu görünür. İlk dosya eklendiği anda kutu kendiliğinden kalkar.

## Yerelde önizleme (isteğe bağlı)

```bash
bundle install
bundle exec jekyll serve
```

Ardından tarayıcıda `http://localhost:4000` adresi açılır.

---

## İçerik ekleme rehberi

Yeni içerik eklemek için bilgisayara bir şey kurmak gerekmez. GitHub'da dosya oluşturmak yeterlidir:

1. GitHub'da depoyu aç, `_posts` (yazı) ya da `_projects` (proje) klasörüne gir.
2. **Add file → Create new file** de.
3. Aşağıdaki şablonu yapıştır, doldur, **Commit changes** de.
4. Bir iki dakika içinde site güncellenir. İlk içerik eklendiğinde ilgili "Yakında" kutusu kendiliğinden kalkar.

### Yazı

Dosya adı: `_posts/YYYY-AA-GG-kisa-baslik.md`, örneğin `_posts/2026-12-01-bellek-duvari.md`.
Dosya adında Türkçe karakter ve boşluk kullanılmaz; sayfa adresi bu addan oluşur (`/yazilar/bellek-duvari/`).

```markdown
---
title: "Bellek duvarı: yapay zekânın asıl darboğazı"
description: "Listede ve paylaşım önizlemesinde görünen tek cümlelik özet."
category: yapay-zeka      # elektronik | sinyal | yazilim | yapay-zeka | notlar
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
- Okuma süresi ve Türkçe tarih otomatik hesaplanır.
- Blok formül için `$$ ... $$` öncesinde ve sonrasında boş satır bırakılmalıdır.

### Proje

Dosya adı: `_projects/kisa-ad.md`, örneğin `_projects/sensor-karti.md`. Adres: `/projeler/sensor-karti/`.

```markdown
---
title: "Düşük güçlü sensör kartı"
summary: "Hangi problemi nasıl çözdüğünü anlatan tek cümle."
year: 2026
status: sürüyor           # sürüyor | tamamlandı
type: elektronik          # elektronik | sinyal | yazilim | yapay-zeka — karttaki ikonu belirler
image: /assets/img/projeler/sensor-karti/kapak.webp   # isteğe bağlı; yoksa ikon görünür
stack:                    # isteğe bağlı — sayfanın altındaki "Teknik künye"
  Donanım: [STM32, INA219]
  Yazılım: [C, Python]
links:
  GitHub: https://github.com/keremfarukozturk/...
---

## Problem
## Yaklaşım
## Sonuç
```

### Görseller

- Klasör: `assets/img/projeler/<proje-adı>/` ya da `assets/img/yazilar/<yazı-adı>/`.
- Biçim: **WebP**, genişlik en fazla 1600px, dosya başına mümkünse 300 KB'ın altında.
- Proje kapakları **16:10** oranında olmalıdır; kartlar aynı oranla gösterilir.
- Yazı içinde: `![Kısa açıklama](/assets/img/yazilar/bellek-duvari/grafik.webp)`

### Kategoriler

Kategoriler ve ikonları `_data/categories.yml` dosyasındadır. Yeni bir kategori eklemeden önce mevcut beşinden birine uyup uymadığına bakın; az kategori, düzenli bir site demektir.

### Site metinleri

- İsim, tanım, e-posta, sosyal bağlantılar, ana sayfadaki "Odak" satırı: `_config.yml`
- Ana sayfa başlığı: `index.html` dosyasının başındaki `hero:` satırları
- Menü ve "Yakında" metinleri: `_data/ui.yml`

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

### 6. Boşluk
Bölümler arasında geniş boşluk (112px) bırakılır. Yoğun görünen bir sayfayı düzeltmenin ilk yolu, bir şey eklemek değil, bir şey çıkarmaktır.

---

## Lisans

Fontlar: IBM Plex, SIL Open Font License 1.1 (`assets/fonts/OFL-LICENSE.txt`).
Formüller: KaTeX 0.16.11, MIT (`assets/vendor/katex/LICENSE.txt`).

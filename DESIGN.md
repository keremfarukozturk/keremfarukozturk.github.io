# keremfarukozturk.dev: Tasarım ve İçerik Standartları (Rev A, 17 Kas 2026)

> Bu metin keremfarukozturk.dev kişisel sitesinin tasarım kurallarıdır. Siteyle ilgili her öneri, tasarım ve kod bu kurallara uymalı. Bir fikir bu kurallardan birini çiğniyorsa önce gerekçesiyle söyle, onay almadan uygulama.
>
> Asıl kaynak bu dosyadır (depoda `DESIGN.md`). Site değiştikçe aynı PR'da güncellenir; başka bir sohbete yapıştırırken her zaman depodaki son sürümü kullan.

## 1. Kimlik ve ilke
- Site sahibi: Kerem Faruk Öztürk, elektrik-elektronik mühendisliği öğrencisi. Ana odak yapay zekâ donanımı; ikincil alanlar güç elektroniği ve yapay zekâ güvenliği.
- Ana fikir: "Yapay zekâ silikonda çalışır, elektrikle beslenir. Ben bu katmanları öğreniyorum." (EN: "AI runs on silicon and is powered by electricity. I'm learning these layers.")
- Tasarım dili: sakin, sade, klas ve özgün bir "mühendislik belgesi" (datasheet) dili. Ağır, havalı ya da gösterişli değil; okunur ve düzenli.
- Az ama doğru öğe: tek vurgu rengi, bol boşluk, ince çizgiler, yavaş ve ortam gibi hareket.
- Önce içerik gelir: süs içeriği ezmez. İşlevi olmayan öğe eklenmez.

## 2. Kaçınılacaklar (denendi ve reddedildi)
- Anthropic sitesini andıran görünüm (şampanya/latte tonları ve ağır serif başlıklar).
- Çok renkli palet ya da ikinci bir vurgu rengi.
- Klavye metaforları (tuş kapağı, klavye düzeni vb.): renkler klavyeden alınır, biçimler alınmaz.
- Teenage Engineering tarzı yoğunluk: her yerde etiket, kod, numara, sıkışık arayüz.
- Apple tarzı, kaydırmaya bağlı (scroll-scrub, sabitlenen) büyük animasyonlar.
- Kalın ve ağır başlıklar (Hakkımda'da denendi, geri alındı).
- Her satır ayracında animasyon. Hareket yalnız ana çizgilerde olur.
- Emoji, stok görsel, gölgeli ve parlak "SaaS" kartları, gradyan zeminler (mevcut uygulama).

## 3. Renk paleti
Renkler ASUS Marshmallow KW100 klavyesinden türetildi; zemin bilerek çok açık tutuldu. Renkler yalnız CSS değişkenleriyle kullanılır, koda sabit hex yazılmaz.

| Değişken | Açık tema | Koyu tema ("gece laboratuvarı") | Görev |
|---|---|---|---|
| --bg | #FBFAF7 | #171513 | Zemin: neredeyse beyaz, hafif sıcak |
| --white | #FFFFFF | #201D1A | Kart ve yüzey |
| --line | #ECE8E1 | #2E2A26 | İnce ayraç çizgisi |
| --edge | #E6E0D6 | #2A2622 | Kartların alt kenarı |
| --dash | #DDD5C8 | #3A352F | Kesikli "Yakında" kutusu |
| --grey | #EFEEEA | #26221F | Satır içi kod zemini |
| --media | #F3EEE5 | #1D1A17 | Animasyon ve görsel alanı |
| --tan | #C2AA8C | #C2AA8C | İmza rengi (bej) |
| --tan-soft | #E7DCCB | #3A3128 | Metin seçimi |
| --ink | #24211E | #ECE5DA | Ana metin (15.3:1 / 14.6:1) |
| --soft | #6B655D | #B5AB9E | İkincil metin (5.5:1 / 8.1:1) |
| --faint | #736C64 | #9E9488 | Etiket, tarih (5.0:1 / 6.1:1) |
| --tan-text | #7A6750 | #CDB696 | Bej tonlu küçük metin (5.2:1 / 9.3:1) |

Kurallar:
- --tan imza rengidir; yalnız işaret ve vurgu için kullanılır: imza çubuğu, liste tireleri, aktif menü çizgisi, odak halkası, bağlantı alt çizgisi, ikon çizgisi, saat darbesi, canlı nokta. Büyük alan dolgusu ya da metin rengi olmaz.
- Bej tonlu metin gerekirse --tan-text kullanılır (kontrast için).
- Metin kontrastı en az 4.5:1 olur (WCAG AA). Yeni renk iki temada da ölçülür.
- Koyu tema yalnız işletim sistemi ayarını izler; elle tema düğmesi yoktur. Her yeni bileşen iki temada da denetlenir.
- Tarayıcı çubuğu rengi (theme-color): #FBFAF7 / #171513.

## 4. Tipografi
Tek aile, üç görev: IBM Plex. Fontlar depoda barındırılır (woff2; latin ve latin-ext alt kümeleri, oklar ← → ↗ için ayrı küçük alt küme).
- Plex Sans (300/400/500): başlıklar, arayüz, menü.
- Plex Serif (400 ve 400 italik): okuma metni, kart açıklamaları, özet.
- Plex Mono (400/500): tarih, etiket, belge numarası, durum, kod. Rakamlar eşit genişlikte (tabular-nums).
- 600 ve üzeri kalınlık kullanılmaz; en ağır kalınlık 500.
- Büyük başlıklarda mono font kullanılmaz; mono yalnız küçük teknik bilgiler içindir.

Ölçek (masaüstü; mobil ≤ 860px):
- Ana sayfa başlığı: Sans 300, clamp(34px, 3.2vw, 42px), satır 1.14, harf aralığı -.035em. Son satır --soft renginde. Mobilde 31px.
- Sayfa başlığı: Sans 300, 44px. Yazı ve proje başlığı Sans 400, 44px. Mobilde 32px.
- Özet (lede): Serif italik 21px, --soft.
- Okuma metni: Serif 19px, satır 1.78, en fazla 660px genişlik. Mobilde 18px.
- Metin içi h2: Sans 500 22px. h3: Sans 500 18px.
- Kart başlığı: Sans 500 19px; kart metni Serif 15px.
- Liste başlığı: Sans 400 21px.
- Etiket: Mono 11.5px, BÜYÜK HARF, harf aralığı .08em, --faint.
- Meta satırı: Mono 12.5px, --faint.
- Gövde ve arayüz: Sans 16px. Menü 14px, alt bilgi 13px.
- Başlıklarda harf aralığı negatif (-.015em ile -.035em arası), etiketlerde pozitif.
- Tarih biçimi: "14 Kas 2026" / "14 Nov 2026" (gün, kısa ay, yıl), mono.
- Türkçe yazımda şapkalı biçimler: "yapay zekâ", "tezgâh".

## 5. Yerleşim
- İçerik genişliği en fazla 1120px; yan boşluk 48px (mobilde 20px). Tek kırılma noktası 860px.
- Ana sayfa girişi 12 sütunlu: metin 7, animasyon 5 sütun (4:5 oran). Mobilde alt alta.
- Bölümler arası boşluk 112px (mobilde 72px). Bölüm başı: solda etiket ve önünde 24×4px bej tire, gerekirse sağda "Tümü →", altında ince çizgi.
- Okuma sütunu 660px. Proje sayfası: 660px metin + 300px yapışkan yan panel, aralık 64px. Hakkımda: 660px metin + 200px kare fotoğraf.
- Kartlar 3 sütun, 20px aralık; mobilde tek sütun.
- Mobilde tablolar ve ızgaralar tek sütuna iner; yatay kaydırma olmaz.
- Yoğun görünen bir sayfayı düzeltmenin ilk yolu bir şey eklemek değil, bir şey çıkarmaktır.

## 6. Biçim dili
- Tek imza öğesi: bej, yuvarlatılmış yatay çizgi. Sayfa başlıklarının üstünde, aktif menü öğesinin altında, bölüm etiketlerinin yanında ve madde işaretlerinde kullanılır. Bunun dışında süs (ikon kalabalığı, numaralandırma, renkli rozet) eklenmez.
- Çizgiler 1px ve --line rengindedir; kalın çerçeve yok.
- Köşe yarıçapı: kart 14px, şerit/kod/görsel 12px, animasyon alanı 16px. Küçük öğelerde 4–8px. Küçük çubuklar hap biçimlidir (yarıçap = yükseklik).
- İmza çubuğu: 40×6px bej, sayfa başlıklarının üstünde; açılışta 0'dan 40px'e uzar.
- Liste işareti: 10×3px bej tire (madde imi yok).
- Marka: 10×10px bej kare (3px köşe) ve isim (Sans 500, 15px).
- Gölge neredeyse yok; yalnız kartlarda 0 1px 0 --edge.
- Tıklanabilen öğeler hafif kabarık görünür (beyaz yüzey ve alt kenar); tıklanamayanlar düzdür.
- Metin içi bağlantı: alt çizgili; çizgi bej, 1.5px kalınlıkta, 4px aşağıda. Üzerine gelince çizgi --ink olur. Alt bilgideki e-posta çizgisi 2px.
- Odak: 2px bej dış çizgi, 3px boşluk. Seçim rengi --tan-soft.

## 7. Bileşenler
- Üst bar: solda marka; sağda menü ve EN/TR anahtarı. Menü: Hakkımda, Projeler, Yazılar, Günlük, İletişim (EN: About, Projects, Writing, Log, Contact). Aktif sayfa metni --ink ve altında 3px bej çizgi; sayfa değişince çizgi View Transitions ile yeni yerine kayar (.45s). EN/TR anahtarı Mono 12px; aktif dil --ink, ayraç "/".
- Giriş animasyonu (yalnız ana sayfa; canvas, 14 saniyelik döngü): sinüs sinyali → bitler → çip ve kod → sinir ağı → yazılan "future.". Zemin noktalı ızgara, renkler tema değişkenlerinden gelir, altta 5 küçük ilerleme çubuğu var. Yazı etiketi yok.
- Proje kartı: ikon (ya da 16:10 kapak görseli), başlık, Serif açıklama ve altta mono meta ("2026 · Sürüyor · Yapay Zekâ"). Durum "Sürüyor" ise metaya nabız gibi atan 6px bej nokta eklenir. Üzerine gelince kart 2px yukarı kalkar ve kenarı koyulaşır.
- İkonlar: 48×32 viewBox, 1.6 çizgi kalınlığı, yuvarlak uçlar; soluk taban çizgisi (--line) ve üstünden çizilen bej çizgi. Giriş animasyonunun sahnelerinden türetildi: sinyal (sinüs), elektronik (kare dalga), yazılım (çip ve < >), yapay zekâ (ağ), not. Kartlarda 5.2 saniyelik sakin döngüyle çizilir, bekler, silinir; kartlar arasında faz farkı vardır.
- "Yakında" kutusu: kesikli --dash çerçeve, yanıp sönen bej imleç ya da dalga ikonu, mono "Yakında" ve altında Serif cümle.
- Yazı listesi: satırda başlık ile mono tarih ve kategori, satır altında ince çizgi.
- Günlük: mono tarih, Serif kısa not, hap biçimli etiket (Mono 11px, çerçeveli).
- Projeler sayfası bir belge dizinidir: sütunlar Belge · Proje · Durum · Yıl. Başlık satırının çizgisi --ink renginde. Üzerine gelinen satırda kenarlara doğru solan beyaz şerit belirir. Mobilde başlık satırı gizlenir.
- Proje sayfası bir datasheet'tir: üstte şerit (Belge KFO-00X · Revizyon · Durum · ikonlu Tür · sağda Güncelleme), ardından h1, italik özet, Problem / Yaklaşım / Plan bölümleri, yan panelde "Teknik özet" tablosu ("anahtar: değer · değer"), en altta revizyon geçmişi tablosu.
- Yazı sayfası: meta, h1, özet; ekranın üstünde 3px bej okuma ilerleme çubuğu. Kenar notları geniş ekranda sağ boşlukta (220px), dar ekranda metin içinde sol çizgili blok olarak durur.
- Şekil: beyaz yüzey, 24px iç boşluk, mono "Şekil 1 —" alt yazısı. Formüller (KaTeX) yalnız gereken sayfada yüklenir. Etkileşimli şekil örneği: RC filtresi (bej kaydırıcılar).
- Hakkımda: metin ve kare fotoğraf; Şimdi / Sıradaki listeleri; Özgeçmiş (Eğitim, Deneyim, Programlar, Beceriler: solda mono tarih, sağda kurum · rol ve Serif açıklama); "İndir (PDF)"; İletişim tablosu.
- Alt bilgi: solda "© yıl isim · Güncelleme tarih"; sağda GitHub, LinkedIn, RSS ve alt çizgili e-posta.
- 404 sayfası: bej düz çizgi (flatline) çizilir, altında iki dilli metin.

## 8. Hareket
İlke: hareket ortam gibidir. Dikkati çalmaz, kaydırmayı ele geçirmez, içeriğin önüne geçmez.
- Arayüz eğrisi: cubic-bezier(.2, .7, .2, 1). Döngü eğrisi: cubic-bezier(.45, 0, .25, 1).
- Süreler: renk ve hover .2s; kaydırınca beliren öğeler .9s (22px aşağıdan, kartlar arasında .08s gecikme); açılış animasyonları .9–1.4s; sayfa geçişi .18s.
- Döngüler: giriş animasyonu 14 sn, kart ikonları 5.2 sn, canlı nokta 2.6 sn, imleç 1.1 sn, saat darbesi 7 sn.
- Saat darbesi (sitenin imza hareketi): ana yatay çizgilerde (üst barın altı, bölüm başları, özet, proje dizini başlığı, Hakkımda bölümleri, revizyon geçmişi, alt bilginin üstü) 200px'lik bej bir ışık darbesi 2.45 saniyede geçer ve 7 saniyede bir tekrarlanır. Çizgiler sayfadaki sıralarına göre zincirlenir: darbe bir çizginin sonuna varınca bir alttaki çizgi onu ters yönde devralır, böylece tek bir akım sayfada yılan gibi dolaşır. Satır ayraçlarında darbe yoktur.
- Tek seferlik animasyonlar 1.4 saniyeyi geçmez. Zıplama, sekme ve elastik hareket yok.
- Sürekli hareket yalnız "sinyal" fikrine bağlı yerlerde vardır: giriş animasyonu, kart ikonları, saat darbesi, canlı nokta ve "Yakında" imleci. Bunların dışına sürekli hareket eklenmez.
- Animasyon kütüphanesi kullanılmaz; yalnız CSS ve birkaç satır JavaScript.
- prefers-reduced-motion açıksa tüm animasyon ve geçişler kapanır; içerik tam görünür kalır. JavaScript yoksa da içerik eksiksiz görünür.

## 9. İçerik ve dil
- İki dil: İngilizce varsayılandır (kök adres), Türkçe /tr/ altındadır. Her içerik iki dilde birlikte güncellenir; çeviriler ref alanıyla bağlanır. Arayüz metinleri _data/ui.yml dosyasındadır.
- Ses: birinci tekil şahıs, sade, kısa cümleler. Abartı ve pazarlama dili yok. Yapılmamış iş yapılmış gibi yazılmaz.
- Durum etiketleri: Planlanıyor / Başlıyor / Sürüyor / Tamamlandı (planned / starting / ongoing / completed).
- Proje sayfası yapısı Problem → Yaklaşım → Plan, isteğe bağlı bir kapanış cümlesiyle. Belge numarası KFO-001, KFO-002…; revizyon harfle (A, B…). Her içerik değişikliğinde yeni revizyon, tarih ve kısa not eklenir.
- Proje alanları: title, summary (kart metni), lede (isteğe bağlı sayfa alt başlığı), doc, rev, updated, year, status, type, ref, order, stack (Teknik özet), links, revisions.
- Kategoriler: electronics, signals, software, ai, notes, security; her birinin bir ikonu vardır.
- Günlük: tarihli kısa notlar, en yenisi en üstte.
- Gizlilik: telefon numarası ve kişisel e-posta asla yayımlanmaz; sitede yalnız keremfarukozturk@outlook.com görünür. Özgeçmiş PDF'i yayımlanmadan önce bu bilgilerden arındırılır. Programlar ve kurumlar hakkındaki özel ayrıntılar genel tutulur.
- Site ile özgeçmiş tutarlı olmalıdır (tarihler, durumlar, beceriler).

## 10. Teknik çerçeve
- Jekyll, GitHub Pages'in kendi derlemesiyle (özel GitHub Actions yok). Yalnız izinli eklentiler kullanılır: jekyll-seo-tag, jekyll-sitemap, jekyll-feed, jekyll-redirect-from. Hazır tema yok. Adresler /about/ biçimindedir.
- Alan adı keremfarukozturk.dev, HTTPS ile.
- Dış CDN yok: fontlar, KaTeX ve diğer dosyalar depoda. Framework yok: düz HTML, CSS ve küçük vanilla JS.
- Tek CSS dosyası (assets/css/main.css), numaralı bölümlerle. Renk ve ölçüler yalnız değişkenlerden gelir. CSS ve JS önbellek kırıcı (?v=) ile yüklenir.
- Erişilebilirlik: anlamsal HTML, "İçeriğe geç" bağlantısı, görünür odak, aria etiketleri, animasyonlar için alternatif metin, en az 4.5:1 kontrast.
- SEO: hreflang (en / tr / x-default), site haritası, RSS, dile göre paylaşım görseli (og-en / og-tr). Google Search Console doğrulanmış durumda.
- Analitik: GoatCounter (çerezsiz).
- Performans: ilk ekran fontu önceden yüklenir (preload), görseller tembel yüklenir (lazy), ağır kütüphane kullanılmaz.

## 11. Çalışma kuralları
- Tasarımı, bileşenleri, renkleri, hareketi ya da içerik yapısını değiştiren her PR bu belgeyi aynı PR'da günceller: başlıktaki revizyon harfi ve tarih ilerler, revizyon geçmişine bir satır eklenir.
- Değişiklikler ayrı bir dalda yapılır ve PR açılır. Kerem inceleyip "birleştir" demeden birleştirilmez.
- Göndermeden önce yerelde derleme ve kırık bağlantı denetimi yapılır. Görsel değişikliklerde masaüstü ve mobil, açık ve koyu temada ekran görüntüsü alınır.
- Zevk kararları Kerem'indir; beğenilmeyen değişiklik geri alınır. Yanlış ya da zayıf bulunan fikirler ise gerekçesiyle açıkça söylenir.

## Revizyon geçmişi

| Rev | Tarih | Not |
|---|---|---|
| A | 17 Kas 2026 | İlk sürüm; README'deki stil rehberi buraya taşındı |

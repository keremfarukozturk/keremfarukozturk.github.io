---
title: "Konsey"
summary: "Konsey, bir soruyu Claude, GPT ve Gemini'ye ayrı ayrı soran, cevaplarını birbirine eleştirten ve ancak üçünün onayından geçen bir metni sunan çok modelli bir karar aracıdır."
lede: "Üç yapay zekâ, tek bir ortak cevap."
doc: KFO-005
rev: A
updated: 2026-11-23
year: 2026
status: completed
type: ai
ref: konsey
order: 4
revisions:
  - { rev: A, date: 2026-11-23, note: "Proje sayfası" }
---

Konsey, bir soruyu Claude, GPT ve Gemini'ye ayrı ayrı soran, cevaplarını birbirine eleştirten ve ancak üçünün onayından geçen bir metni sunan çok modelli bir karar aracıdır.

## Neden

Bir yapay zekâ modeli yanıldığında da emin konuşur. Konsey, tek bir sese güvenmek yerine birbirini denetleyen üç sesi bir araya getirir.

Konsey'i, tek bir modelin emin ama yanlış olabilen cevabına güvenmek zorunda kalmamak için yaptım.

## Nasıl çalışır

{% include konsey-flow.html %}

1. **Bağımsız cevap.** Üç model soruyu birbirini görmeden cevaplar.
2. **Kimliksiz eleştiri.** Her model, diğer cevapları kimin yazdığını bilmeden eleştirir.
3. **Şüpheci düzeltme.** Modeller eleştiriyi kabul etmeden önce doğrular; doğrulanamayan nokta belirsizlik olarak yazılır.
4. **Ortak metin.** Düzeltilmiş cevaplardan tek bir metin oluşturulur.
5. **Ayrı oylama.** Üç model metni ayrı ayrı onaylar ya da reddeder; oyları kod sayar.
{: .flow-steps}

## İlkeler

- **Kurallar kodla denetlenir.** Oy sayımı, tur sırası ve kural ihlalleri yazılımla kontrol edilir.
- **Kaynaklar numarayla gösterilir.** Güncel bilgi gereken sorularda her iddia kaynağına bağlanır; uydurma atıflar otomatik olarak yakalanır.
- **Belirsizlik saklanmaz.** Çözülemeyen noktalar cevabın içinde açıkça yer alır.
- **Modeller kapalı ortamda çalışır.** Yalnızca metin üretirler; dosyalara, komutlara ve hesaplara erişemezler.
- **Ek API maliyeti yoktur.** Her model kendi resmi komut satırı aracıyla çalışır.

Oybirliği doğruluk demek değildir. Konsey hatayı ortadan kaldırmayı değil, görünür kılmayı hedefler.

## Künye

Sürüm 1.0 · Python · 3 model · 74 tasarım kararı · 820 otomatik test
{: .facts}

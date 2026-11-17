---
title: "48 V → 12 V ara bara dönüştürücüsü"
summary: "Veri merkezi rafında yapay zekâ donanımını besleyen son ara güç aşamasının küçük ölçekli, ölçümle doğrulanan modeli."
doc: KFO-002
rev: C
updated: 2026-11-17
year: 2026
status: ongoing
type: electronics
ref: 48v-power
order: 1
stack:
  Konu: [Güç dağıtımı, DC-DC dönüşüm, dijital kontrol]
  Ölçüm: [Verim, yük darbesi tepkisi, döngü kazancı]
  Araçlar: [LTspice, KiCad]
revisions:
  - { rev: C, date: 2026-11-17, note: "Ana proje oldu; durum Sürüyor, plan aşamalara ayrıldı" }
  - { rev: B, date: 2026-11-14, note: "Kapsam 48 V → 12 V ara bara dönüştürücüsüne netleşti; plan güncellendi" }
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Yapay zekâ donanımı küçük bir alanda çok fazla güç çeker ve bu gücü verimli biçimde ulaştırmak başlı başına bir sınıra dönüşüyor. Aynı güç için gerilimin dört katına çıkması akımın dörtte birine inmesi demek; iletim kayıpları (I²R) ise on altıda birine düşer. Bu yüzden dağıtım gerilimi yükseliyor: raf girişi 800 V'a varan doğru akıma geçerken, 48 V'tan 12 V'a inen ara aşama yakın vadede birçok rafın içinde kalmaya devam ediyor.

## Yaklaşım

Bu ara aşamanın tezgâh ölçeğinde küçük bir modeli: mikrodenetleyiciyle kontrol edilen bir senkron düşürücü dönüştürücü. İlk kart 24 V → 5 V, ardından 48 V → 12 V. Her aşamada ölçüm simülasyonla karşılaştırılır ve aradaki farkların nedeni açıklanır.

## Plan

- Teori ve simülasyon: ideal, kayıplı ve kapalı döngü düşürücü dönüştürücü
- 24 V → 5 V ilk kart: dijital kontrol döngüsü ve koruma
- Ölçüm: verim, yük darbesi tepkisi ve döngü kazancı; simülasyonla karşılaştırma
- 48 V → 12 V sürümü ve aynı ölçümler
- İsteğe bağlı: yapay zekâ yükünü taklit eden bir yük düzeneği

Proje şu anda ilk aşamada: teori ve simülasyon.

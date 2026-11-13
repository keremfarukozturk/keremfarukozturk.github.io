---
title: "Tezgâh ölçeğinde 48 V veri merkezi güç mimarisi"
summary: "Veri merkezlerinde yapay zekâ donanımını besleyen 48 V güç mimarisinin küçük ölçekli bir modeli."
doc: KFO-002
rev: A
updated: 2026-11-13
year: 2026
status: planned
type: electronics
ref: 48v-power
order: 2
stack:
  Konu: [Güç dağıtımı, DC-DC dönüşüm]
  Ölçüm: [Verim, kayıplar]
revisions:
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Yapay zekâ donanımı küçük bir alanda çok fazla güç çeker ve bu gücü verimli biçimde ulaştırmak başlı başına bir sınıra dönüşüyor. Veri merkezleri 12 V'tan 48 V dağıtıma geçiyor: Aynı güç için gerilimin dört katına çıkması akımın dörtte birine inmesi demek; iletim kayıpları (I²R) ise on altıda birine düşer.

## Yaklaşım

Bu zincirin tezgâh ölçeğinde küçük bir modeli: bir 48 V bara, gerilimi yük için düşüren bir dönüştürücü ve her aşamada verim ile kayıpların dikkatli ölçümü.

## Plan

- 48 V mimariler üzerine okuma notları
- Dönüştürücü seçimi ve devre şeması
- Tezgâh ölçeğinde kurulum ve ölçüm

Bu proje, yapay zekâ hızlandırıcısının ilk aşamalarından sonra başlayacak.

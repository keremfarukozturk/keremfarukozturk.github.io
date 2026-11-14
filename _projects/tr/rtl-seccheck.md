---
title: "RTL-SecCheck"
summary: "Yapay zekâ yardımıyla yazılan donanım tasarımlarının doğrulamasını denetleyen açık kaynak bir hat: önce kendi tasarımlarımda, sonra bilinen hatalı açık tasarımlarda."
lede: "Yapay zekâ yardımıyla yazılan donanım tasarımlarının doğrulamasını denetleyen açık kaynak bir hat."
doc: KFO-003
rev: B
updated: 2026-11-14
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Yöntemler: [Lint, simülasyon, biçimsel doğrulama, mutasyon testi]
  Odak: [Doğrulama yeterliliği, donanım güvenliği]
revisions:
  - { rev: B, date: 2026-11-14, note: "Kapsam doğrulamanın denetimine odaklandı; iki aşamalı plan" }
  - { rev: A, date: 2026-11-13, note: "Proje sayfası" }
---

## Problem

Donanım kodunun ve onu sınayan testlerin giderek daha büyük bir kısmı yapay zekâ modellerinin yardımıyla yazılıyor. Bir tasarım testlerini geçip yine de bir hata ya da güvenlik açığı saklayabilir. Asıl soru, doğrulamanın o hatayı yakalayacak kadar iyi olup olmadığı.

## Yaklaşım

Hat; lint, simülasyon ve biçimsel doğrulamayı birleştirir. İkinci aşamada tasarıma bilerek hata ekler ve doğrulamanın bunu yakalayıp yakalamadığını ölçer.

## Plan

- Aşama 1: Hattı kendi hızlandırıcı modüllerime uyguluyorum; yapay zekânın ne ürettiğini ve hangi hatayı yakaladığımı kaydediyorum.
- Aşama 2 (2027): İçinde bilinen hatalar bulunan açık tasarımlarda (Hack@DAC, OpenTitan), yapay zekânın yazdığı doğrulama kurallarının bu hataları yakalayıp yakalamadığının ölçümü.

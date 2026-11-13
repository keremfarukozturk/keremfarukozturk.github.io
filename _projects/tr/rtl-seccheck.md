---
title: "RTL-SecCheck"
summary: "Yapay zekâ yardımıyla yazılmış donanım tasarımlarını işlevsel ve güvenlik hatalarına karşı denetleyen açık kaynak bir doğrulama hattı."
doc: KFO-003
rev: A
updated: 2026-11-13
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Yöntemler: [Lint, simülasyon, biçimsel doğrulama]
  Odak: [Donanım güvenliği]
revisions:
  - { rev: A, date: 2026-11-13, note: "Proje sayfası" }
---

## Problem

Donanım kodunun giderek daha büyük bir kısmı yapay zekâ modellerinin yardımıyla yazılıyor. Bir tasarım testlerini geçip yine de bir güvenlik açığı saklayabilir.

## Yaklaşım

Lint, simülasyon ve biçimsel doğrulamayı, yaygın donanım zayıflıklarına yönelik bir güvenlik denetimleri setiyle birleştiren açık kaynak bir hat.

## Plan

Hattı önce kendi tasarımlarıma uyguluyorum. Başka tasarımlarda doğrulanan bulgular, herhangi bir şey yayımlanmadan önce sorumlu ifşa ilkesiyle tasarımcılarına bildirilecek.

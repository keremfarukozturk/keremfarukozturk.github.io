---
title: "Güvenli dijital güç kontrolcüsü"
summary: "Ana denetleyicinin firmware’i ele geçirilse bile dijital kontrollü bir güç dönüştürücüsünü güvenli çalışma sınırlarında tutan, donanımla zorlanan bir koruma katmanı."
doc: KFO-004
rev: A
updated: 2026-11-17
year: 2026
status: ongoing
type: security
ref: secure-power-controller
order: 2
stack:
  Tasarım: [Verilog, FPGA, gömülü firmware]
  Doğrulama: [Biçimsel doğrulama (SymbiYosys)]
  Güvenlik: [Güvenli önyükleme, imzalı güncelleme, saldırı testi]
revisions:
  - { rev: A, date: 2026-11-17, note: "Proje sayfası ve plan" }
---

## Problem

Dijital kontrollü bir güç dönüştürücüsünde anahtarları firmware sürer. Firmware ele geçirilirse aynı yazılım, donanıma zarar verecek komutlar da verebilir. Güvenli çalışma yalnızca yazılımın doğru davranmasına bağlı kalmamalı.

## Yaklaşım

Ana denetleyici ile anahtar sürücüsü arasına, firmware'in değiştiremeyeceği bağımsız bir donanım koruma devresi. Devre önceden tanımlanmış güvenli çalışma kurallarını izler; bir kural ihlal edilirse çıkışları keser ve kilitlenir. Bu kurallar biçimsel olarak kanıtlanır. Güvenli önyükleme ve imzalı firmware güncellemesi ise saldırganın işini baştan zorlaştırır.

## Plan

- Tehdit modeli ve sistemin asla aşmaması gereken kurallar
- FPGA üzerinde bağımsız koruma devresi
- Kuralların SymbiYosys ile biçimsel kanıtı
- Güvenli önyükleme ve imzalı firmware güncellemesi
- Kötü amaçlı bir firmware ile saldırı denemesi ve korumanın bunu durdurduğunun ölçümle gösterilmesi

Proje, 48 V → 12 V dönüştürücünün kartı üzerine kurulur; donanım aşamaları o kart hazır olduktan sonra başlar.

---
title: "RTL-SecCheck"
summary: "Yapay zekâ yardımıyla yazılmış küçük RTL tasarımlarını işlevsel ve güvenlik hatalarına karşı denetleyen açık kaynak bir doğrulama hattı."
doc: KFO-003
rev: A
updated: 2026-11-13
year: 2026
status: ongoing
type: security
ref: rtl-seccheck
order: 2
stack:
  Denetimler: [Yosys lint, cocotb simülasyonu, SymbiYosys biçimsel doğrulama]
  Özellikler: [SystemVerilog Assertions (SVA)]
  Dil: [Python]
revisions:
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Donanım kodunun giderek daha büyük bir kısmı yapay zekâ modellerinin yardımıyla yazılıyor. Bir tasarım testlerini geçip yine de bir güvenlik açığı saklayabilir: sıfırlamada başlatılmayan bir güvenlik kaydı ya da bir kilidi aşan hata ayıklama modu gibi.

## Yaklaşım

Küçük RTL tasarımları için üç katmanlı bir hat: Yosys ile lint, cocotb ile simülasyon ve SymbiYosys ile biçimsel doğrulama. Bunun üzerine, SystemVerilog Assertions ile yazılmış ve MITRE donanım CWE'leriyle eşleştirilmiş bir güvenlik özellikleri kütüphanesi. Örneğin CWE-1271 (güvenlik kayıtlarının sıfırlamada başlatılmaması) ve CWE-1234 (hata ayıklama modlarının kilitleri aşması).

## Plan

- Hattı önce kendi hızlandırıcımın yapay zekâ yardımıyla yazılmış varyantlarına uygulamak
- Ardından açık kaynak Tiny Tapeout tasarımlarına
- Doğrulanan bulguları sorumlu ifşa ilkesiyle tasarımcılara bildirmek

Bu sayfa her aşama tamamlandıkça güncellenir.

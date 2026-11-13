---
title: "Küçük bir yapay zekâ hızlandırıcısı"
summary: "Sinir ağı çıkarımı için sade bir donanım tasarımı; RTL'den doğrulamaya ve FPGA'ya kadar belgeleniyor."
doc: KFO-001
rev: A
updated: 2026-11-13
year: 2026
status: starting
type: ai
ref: ai-accelerator
order: 1
stack:
  Tasarım: [Verilog]
  Doğrulama: [cocotb]
  Hedef: [FPGA]
revisions:
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Sinir ağları zamanlarının büyük kısmını sayıları çarpıp toplayarak geçirir. Genel amaçlı işlemciler bunu yapabilir; ama bu işe adanmış donanım çok daha hızlı ve çok daha az enerjiyle yapar. Bu dengeyi, küçük ölçekte kendim inşa ederek anlamak istiyorum.

## Yaklaşım

Düşük hassasiyetli, küçük bir çıkarım hızlandırıcısı: basit tamponlarla beslenen bir çarp-topla birimleri dizisi. Her modülün, birleştirilmeden önce kendi otomatik testleri olacak.

## Plan

- Mimari ve blok diyagramı
- Çarp-topla birimi ve dizi için RTL
- cocotb ile doğrulama
- FPGA üzerinde çalıştırma ve sonuçları ölçme

Bu sayfa her aşama tamamlandıkça güncellenir; değişiklikler aşağıdaki revizyon geçmişinde yer alır.

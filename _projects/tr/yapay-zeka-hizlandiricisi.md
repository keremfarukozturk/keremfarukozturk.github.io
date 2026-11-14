---
title: "Küçük bir yapay zekâ hızlandırıcısı"
summary: "Verilog ile tasarlanan, bit düzeyinde doğrulanan ve FPGA ile Tiny Tapeout'u hedefleyen küçük bir INT8 sinir ağı çıkarım hızlandırıcısı."
doc: KFO-001
rev: B
updated: 2026-11-14
year: 2026
status: ongoing
type: ai
ref: ai-accelerator
order: 1
stack:
  Tasarım: [Verilog]
  Doğrulama: [cocotb, Icarus Verilog, Verilator, SymbiYosys, Python]
  Hedef: [FPGA, Tiny Tapeout (GF180MCU)]
revisions:
  - { rev: B, date: 2026-11-14, note: "Doğrulama araçları, hedef süreç ve plan güncellendi" }
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Sinir ağları zamanlarının büyük kısmını sayıları çarpıp toplayarak geçirir. Genel amaçlı işlemciler bunu yapabilir; ama bu işe adanmış donanım çok daha hızlı ve çok daha az enerjiyle yapar. Bu dengeyi, küçük ölçekte kendim inşa ederek anlamak istiyorum.

## Yaklaşım

El yazısı rakam sınıflandırması için küçük bir INT8 çıkarım hızlandırıcısı: çarp-topla (MAC) veri yolu, bir kontrol durum makinesi, ReLU aktivasyonu ve argmax çıkış katı. Ağırlıklar çipe sığmadığı için dışarıdan gönderiliyor. RTL, cocotb ile bir Python referans modeline karşı bit düzeyinde doğrulanıyor.

## Plan

- Mimari ve blok diyagramı
- MAC veri yolu, kontrol ve aktivasyon için RTL
- Python modeline karşı bit düzeyinde doğrulama
- Düşük maliyetli bir FPGA kartında, ready/valid arayüzüyle çalıştırma
- Tiny Tapeout'a göndermeden önce varyantları (ağırlık bit genişliği, seri ve paralel MAC) alan, zamanlama ve doğruluk açısından karşılaştırma
- Tiny Tapeout'a gönderim ve çip geldiğinde ölçüm

Bu sayfa her aşama tamamlandıkça güncellenir; değişiklikler aşağıdaki revizyon geçmişinde yer alır.

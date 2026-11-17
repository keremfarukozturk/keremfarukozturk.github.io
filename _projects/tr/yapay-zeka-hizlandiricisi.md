---
title: "Küçük bir yapay zekâ hızlandırıcısı"
summary: "Verilog ile tasarlanan, bit düzeyinde doğrulanan küçük bir INT8 sinir ağı çıkarım hızlandırıcısı; en küçük çalışan sürümüyle Tiny Tapeout’a gönderilip kapanacak."
doc: KFO-001
rev: C
updated: 2026-11-17
year: 2026
status: ongoing
type: ai
ref: ai-accelerator
order: 3
stack:
  Tasarım: [Verilog]
  Doğrulama: [cocotb, Icarus Verilog, Yosys, SymbiYosys, Python]
  Hedef: [Tiny Tapeout, FPGA (isteğe bağlı)]
revisions:
  - { rev: C, date: 2026-11-17, note: "Kapanış projesi olarak yeniden kapsamlandı; doğrulama kontrolleri bu projeye taşındı" }
  - { rev: B, date: 2026-11-14, note: "Doğrulama araçları, hedef süreç ve plan güncellendi" }
  - { rev: A, date: 2026-11-13, note: "Proje sayfası ve plan" }
---

## Problem

Sinir ağları zamanlarının büyük kısmını sayıları çarpıp toplayarak geçirir. Genel amaçlı işlemciler bunu yapabilir; ama bu işe adanmış donanım çok daha hızlı ve çok daha az enerjiyle yapar. Bu dengeyi, küçük ölçekte kendim inşa ederek anlamak istiyorum.

## Yaklaşım

Python'da eğitilen çok küçük bir sinir ağı ve onun sabit noktalı (INT8) referans modeli. Donanım tarafında bir çarp-topla (MAC) birimi ve ağırlıkları çip dışından sırayla alan bir kontrol birimi var. Her modül lint, simülasyon ve biçimsel kontrollerden geçiyor; çıktı, cocotb ile Python referansına karşı bit düzeyinde karşılaştırılıyor.

## Plan

- Python'da küçük bir ağ ve INT8 referans modeli
- Verilog'da MAC birimi ve kontrol birimi (ready/valid arayüzü)
- cocotb ile bit düzeyinde eşleşme; Yosys ve SymbiYosys ile temel kontroller
- Tasarımı küçültüp Tiny Tapeout'a gönderme; çip geldiğinde kısa bir ölçüm
- İsteğe bağlı: FPGA kartında çalıştırma

Bu bir kapanış projesi: en küçük çalışan sürüm Tiny Tapeout'a gönderildiğinde kapanır. Kapsam bilerek küçük tutuldu.

---
layout: page
title: Hakkımda
lede: Elektrik-elektronik mühendisliği öğrencisiyim.
---

<div class="about">
<figure class="about-photo">
  <img src="{{ '/assets/img/kerem.webp' | relative_url }}" alt="Kerem Faruk Öztürk" width="400" height="400" loading="eager" decoding="async">
</figure>

<div class="prose" markdown="1">

Yapay zekânın görünmeyen tarafıyla ilgileniyorum: modelleri çalıştıran çipler, o çipleri besleyen enerji ve bu sistemleri güvende tutmanın yolları. Yapay zekâ ne kadar hızlı gelişirse gelişsin silikonun, enerjinin ve güvenliğin sınırlarına takılıyor. Derinleşmek istediğim yer bu sınırlar.

Ana odağım yapay zekâ donanımı: çip tasarımı ve doğrulama. Güç elektroniği ve yapay zekâ güvenliği bu odağı besleyen yan alanlarım. Hedefim, güvenliği sonradan eklenen değil, tasarımın ilk adımından itibaren düşünülen sistemler inşa eden bir mühendis olmak.

</div>
</div>

<section class="status" aria-labelledby="simdi-baslik">
  <h2 class="label" id="simdi-baslik">Şimdi</h2>
  <ul>
    <li>Siber Vatan programında siber güvenlik ve yapay zekâ güvenliği eğitimleri alıyorum.</li>
    <li><b>Küçük bir yapay zekâ hızlandırıcısı:</b> Sinir ağı çıkarımı için sade bir donanım tasarımı üzerinde çalışmaya başlıyorum. Tasarımdan doğrulamaya ve FPGA'ya kadar her aşamayı burada belgeleyeceğim.</li>
  </ul>
</section>

<section class="status" aria-labelledby="siradaki-baslik">
  <h2 class="label" id="siradaki-baslik">Sıradaki</h2>
  <ul>
    <li><b>Güç elektroniği:</b> Veri merkezi güç mimarisinin küçük ölçekli bir modeli.</li>
  </ul>
</section>

<p class="about-note">Bu sitede projelerimi, deneylerimi ve öğrendiklerimi hatalarımla birlikte belgeliyorum.</p>

<section class="contact" id="iletisim" aria-labelledby="iletisim-baslik">
  <h2 class="label" id="iletisim-baslik">İletişim</h2>
  <ul>
    <li><span class="mono">E-posta</span><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
    {%- if site.social.github != "" %}
    <li><span class="mono">GitHub</span><a href="{{ site.social.github }}" rel="me">{{ site.social.github | remove: "https://" }}</a></li>
    {%- endif %}
    {%- if site.social.linkedin != "" %}
    <li><span class="mono">LinkedIn</span><a href="{{ site.social.linkedin }}" rel="me">{{ site.social.linkedin | remove: "https://" | remove: "www." }}</a></li>
    {%- endif %}
  </ul>
</section>

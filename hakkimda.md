---
layout: page
title: Hakkımda
lede: Elektrik-elektronik mühendisliği öğrencisiyim.
---

<div class="prose" markdown="1">

Yapay zekânın hem yazılım hem de donanım tarafıyla ilgileniyorum; özellikle de onu sınırlayan darboğazlarla. Bir alanda derinleşmeyi, o alanı besleyen yan alanlarda da kendimi geliştirmeyi önemsiyorum.

Bu sayfa hazırlanıyor.

</div>

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

---
layout: default
permalink: /engine/
title: ENGINE
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 12
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

{% comment %} ===== ENGINE page — editorial masonry (light canvas, this page only) ===== {% endcomment %}
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* ---- light canvas: applies ONLY on the engine page ---- */
body{ background-color:#ececea !important; }
footer, footer .container{ color:#5a5a55 !important; }

.post{ position:relative; }

/* ---- masthead: big left-aligned ENGINE + intro (matches prototype) ---- */
.engine-masthead{
  position:relative;
  padding:48px 0 6px;
  margin-bottom:10px;
}
.engine-masthead h1{
  position:relative; z-index:2;
  font-family:"Space Grotesk", sans-serif;
  font-weight:700;
  font-size:clamp(52px, 11vw, 140px);
  line-height:.9;
  letter-spacing:-.03em;
  text-transform:uppercase;
  color:#111;
  margin:0;
}
.engine-masthead p{
  position:relative; z-index:2;
  max-width:46ch;
  margin:20px 0 0;
  color:#3d3d3a;
  font-size:clamp(15px,1.6vw,19px);
  line-height:1.5;
}

/* ---- scattered accent dots around the title ---- */
.engine-deco{ position:absolute; inset:0; pointer-events:none; }
.engine-deco span{ position:absolute; border-radius:50%; display:block; }
.engine-deco .d1{ width:16px; height:16px; background:#86e0c0; top:-6px;  left:53%; }
.engine-deco .d2{ width:22px; height:22px; background:#ffce00; top:130px; left:22%; z-index:3; }
.engine-deco .d3{ width:14px; height:14px; background:#ff9fb2; top:250px; left:46%; }
.engine-deco .d4{ width:13px; height:13px; background:#ff9fb2; top:150px; right:5%; }
.engine-deco .d5{ width:12px; height:12px; background:#7fb2ff; top:28px;  left:88%; }
.engine-deco .d6{ width:18px; height:18px; background:#ff6b4a; bottom:-14px; left:4%; }

/* ---- masonry grid ---- */
.engine-grid{
  position:relative; z-index:1;
  columns:4 260px;
  column-gap:20px;
  margin-top:14px;
}
@media (max-width:1180px){ .engine-grid{ columns:3 240px; } }
@media (max-width:820px){  .engine-grid{ columns:2 200px; } }
@media (max-width:520px){  .engine-grid{ columns:1; } }

/* ---- card base ---- */
.engine-card{
  break-inside:avoid;
  display:block; position:relative;
  margin:0 0 20px;
  border-radius:18px; overflow:hidden;
  text-decoration:none; color:inherit;
  background-size:cover; background-position:center;
  transition:transform .22s ease, box-shadow .22s ease;
}
.engine-card:hover{ transform:translateY(-4px); box-shadow:0 18px 40px -18px rgba(0,0,0,.45); color:inherit; }
.engine-card:focus-visible{ outline:3px solid #2b50e2; outline-offset:3px; }

.engine-inner{ position:relative; z-index:2; padding:22px 22px 20px; min-height:148px; display:flex; flex-direction:column; }
.engine-date{ position:absolute; top:18px; right:20px; z-index:3; text-align:right; }
.engine-date .ym{ font-family:"Space Grotesk",sans-serif; font-size:10px; letter-spacing:.16em; opacity:.7; display:block; margin-bottom:-3px; }
.engine-date .day{ font-family:"Space Grotesk",sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-.02em; }

.engine-pill{
  align-self:flex-start;
  font-family:"Space Grotesk",sans-serif; font-size:10px; font-weight:600;
  letter-spacing:.12em; text-transform:uppercase;
  padding:4px 10px; border-radius:100px;
  border:1.4px solid #ff4d6d; color:#ff4d6d;
  margin-bottom:auto;
}
.engine-title{ font-size:19px; line-height:1.32; font-weight:700; margin:18px 0 0; letter-spacing:-.01em; }
.engine-excerpt{ font-size:13.5px; line-height:1.6; margin:10px 0 0; }
.engine-meta{ display:flex; align-items:center; gap:14px; margin-top:18px; font-family:"Space Grotesk",sans-serif; font-size:11px; letter-spacing:.04em; }
.engine-meta .more{ margin-left:auto; letter-spacing:.2em; }

/* ---- variant: paper (white) ---- */
.engine-card--paper{ background-color:#ffffff; }
.engine-card--paper .engine-title,
.engine-card--paper .engine-date{ color:#141414; }
.engine-card--paper .engine-excerpt,
.engine-card--paper .engine-meta{ color:#6b6b64; }

/* ---- variant: solid brand colors ---- */
.engine-card--blue{ background-color:#2b50e2; }
.engine-card--red{ background-color:#f5321f; }
.engine-card--yellow{ background-color:#ffce00; }
.engine-card--black{ background-color:#0e0e0e; }

.engine-card--blue, .engine-card--red, .engine-card--black{ color:#fff; }
.engine-card--blue .engine-title, .engine-card--red .engine-title, .engine-card--black .engine-title{ color:#fff; }
.engine-card--blue .engine-excerpt, .engine-card--red .engine-excerpt, .engine-card--black .engine-excerpt,
.engine-card--blue .engine-meta, .engine-card--red .engine-meta, .engine-card--black .engine-meta{ color:rgba(255,255,255,.78); }
.engine-card--blue .engine-pill, .engine-card--red .engine-pill, .engine-card--black .engine-pill{ border-color:rgba(255,255,255,.75); color:#fff; }

.engine-card--yellow{ color:#141414; }
.engine-card--yellow .engine-title{ color:#141414; }
.engine-card--yellow .engine-excerpt, .engine-card--yellow .engine-meta{ color:#5c520f; }
.engine-card--yellow .engine-pill{ border-color:#141414; color:#141414; }

/* ---- variant: render (has thumbnail) ---- */
.engine-card--render{ color:#fff; min-height:340px; display:flex; }
.engine-card--render .engine-inner{ justify-content:flex-end; min-height:340px; }
.engine-card--render::after{ content:""; position:absolute; inset:0; z-index:1; background:linear-gradient(180deg, rgba(0,0,0,.05) 30%, rgba(0,0,0,.66) 100%); }
.engine-card--render .engine-date, .engine-card--render .engine-inner{ z-index:2; }
.engine-card--render .engine-title{ color:#fff; }
.engine-card--render .engine-excerpt, .engine-card--render .engine-meta{ color:rgba(255,255,255,.85); }
.engine-card--render .engine-pill{ border-color:rgba(255,255,255,.8); color:#fff; }

/* ---- featured accent ---- */
.engine-card.is-featured{ box-shadow:0 0 0 2px #ff4d6d; }

@media (prefers-reduced-motion: reduce){
  .engine-card{ transition:none; }
  .engine-card:hover{ transform:none; }
}
</style>

<div class="post">

  {% comment %} ===== masthead + scattered dots ===== {% endcomment %}
  <div class="engine-masthead">
    <div class="engine-deco" aria-hidden="true">
      <span class="d1"></span><span class="d2"></span><span class="d3"></span>
      <span class="d4"></span><span class="d5"></span><span class="d6"></span>
    </div>
    <h1>ENGINE</h1>
    <p>{{ site.blog_description }}</p>
  </div>

  {% comment %} ===== masonry card grid ===== {% endcomment %}
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  <div class="engine-grid">
    {% for post in postlist %}

      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}

      {% comment %} card type: thumbnail -> render, else card_color, else auto-rotate {% endcomment %}
      {% if post.thumbnail %}
        {% assign card_class = "engine-card--render" %}
      {% elsif post.card_color %}
        {% assign card_class = "engine-card--" | append: post.card_color %}
      {% else %}
        {% capture card_class %}engine-card--{% cycle 'paper', 'blue', 'red', 'black', 'yellow' %}{% endcapture %}
      {% endif %}

      {% assign pill = post.categories.first | default: post.tags.first %}
      {% assign target_url = post.url %}
      {% if post.redirect contains '://' %}{% assign target_url = post.redirect %}{% endif %}

      <a class="engine-card {{ card_class }}{% if post.featured %} is-featured{% endif %}"
         href="{{ target_url | relative_url }}"
         {% if post.thumbnail %}style="background-image:url('{{ post.thumbnail | relative_url }}')"{% endif %}>
        <div class="engine-date">
          <span class="ym">{{ post.date | date: "%Y.%m" }}</span>
          <span class="day">{{ post.date | date: "%d" }}</span>
        </div>
        <div class="engine-inner">
          {% if pill %}<span class="engine-pill">{{ pill }}</span>{% endif %}
          <h3 class="engine-title">{{ post.title }}</h3>
          {% if post.description %}<p class="engine-excerpt">{{ post.description }}</p>{% endif %}
          <div class="engine-meta">
            <span>{{ read_time }} MIN READ</span>
            {% if post.tags.first %}<span>#{{ post.tags.first }}</span>{% endif %}
            <span class="more">&middot;&middot;&middot;</span>
          </div>
        </div>
      </a>

    {% endfor %}
  </div>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}

</div>
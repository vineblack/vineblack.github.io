---
layout: default
permalink: /engine/
title: ENGINE
nav: true
nav_order: 3
custom_topbar: true
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

{% comment %} ===== ENGINE page styles (Kpop-Radar style masonry) ===== {% endcomment %}
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* ---- in-body category filter (static → never overlaps the top nav) ---- */
.engine-filter{
  position: static;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 26px;
}
.engine-filter a{
  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 7px 15px;
  border-radius: 100px;
  color: var(--global-text-color-light);
  border: 1px solid var(--global-divider-color);
  transition: .18s ease;
}
.engine-filter a:hover{ color: var(--global-text-color); }
.engine-filter a.on{
  color: var(--global-bg-color);
  background: var(--global-text-color);
  border-color: transparent;
}

/* ---- masonry grid ---- */
.engine-grid{
  columns: 4 260px;
  column-gap: 20px;
  margin-top: 8px;
}
@media (max-width: 1180px){ .engine-grid{ columns: 3 240px; } }
@media (max-width: 820px){  .engine-grid{ columns: 2 200px; } }
@media (max-width: 520px){  .engine-grid{ columns: 1; } }

/* ---- card base ---- */
.engine-card{
  break-inside: avoid;
  display: block;
  position: relative;
  margin: 0 0 20px;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-size: cover;
  background-position: center;
  transition: transform .22s ease, box-shadow .22s ease;
}
.engine-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 40px -18px rgba(0,0,0,.55);
  color: inherit;
}
.engine-card:focus-visible{ outline: 3px solid var(--global-theme-color); outline-offset: 3px; }

.engine-inner{
  position: relative; z-index: 2;
  padding: 22px 22px 20px;
  min-height: 148px;
  display: flex; flex-direction: column;
}
.engine-date{ position: absolute; top: 18px; right: 20px; z-index: 3; text-align: right; }
.engine-date .ym{ font-family:"Space Grotesk",sans-serif; font-size:10px; letter-spacing:.16em; opacity:.7; display:block; margin-bottom:-3px; }
.engine-date .day{ font-family:"Space Grotesk",sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-.02em; }

.engine-pill{
  align-self: flex-start;
  font-family:"Space Grotesk",sans-serif; font-size:10px; font-weight:600;
  letter-spacing:.12em; text-transform:uppercase;
  padding: 4px 10px; border-radius:100px;
  border:1.4px solid var(--global-theme-color); color:var(--global-theme-color);
  margin-bottom:auto;
}
.engine-title{ font-size:19px; line-height:1.32; font-weight:700; margin:18px 0 0; letter-spacing:-.01em; }
.engine-excerpt{ font-size:13.5px; line-height:1.6; margin:10px 0 0; color:var(--global-text-color-light); }
.engine-meta{
  display:flex; align-items:center; gap:14px; margin-top:18px;
  font-family:"Space Grotesk",sans-serif; font-size:11px; letter-spacing:.04em;
  color:var(--global-text-color-light);
}
.engine-meta .more{ margin-left:auto; letter-spacing:.2em; }

/* ---- variant: paper (theme card bg) ---- */
.engine-card--paper{ background-color: var(--global-card-bg-color); }
.engine-card--paper .engine-title{ color: var(--global-text-color); }

/* ---- variant: solid brand colors (pop in both light/dark) ---- */
.engine-card--blue{   background-color:#2b50e2; }
.engine-card--red{    background-color:#f5321f; }
.engine-card--yellow{ background-color:#ffce00; }
.engine-card--black{  background-color:#0e0e0e; }

.engine-card--blue, .engine-card--red, .engine-card--black{ color:#fff; }
.engine-card--blue .engine-title,
.engine-card--red .engine-title,
.engine-card--black .engine-title{ color:#fff; }
.engine-card--blue .engine-excerpt,
.engine-card--red .engine-excerpt,
.engine-card--black .engine-excerpt,
.engine-card--blue .engine-meta,
.engine-card--red .engine-meta,
.engine-card--black .engine-meta{ color:rgba(255,255,255,.78); }
.engine-card--blue .engine-pill,
.engine-card--red .engine-pill,
.engine-card--black .engine-pill{ border-color:rgba(255,255,255,.75); color:#fff; }

.engine-card--yellow{ color:#141414; }
.engine-card--yellow .engine-title{ color:#141414; }
.engine-card--yellow .engine-excerpt,
.engine-card--yellow .engine-meta{ color:#5c520f; }
.engine-card--yellow .engine-pill{ border-color:#141414; color:#141414; }

/* ---- variant: render (has thumbnail) ---- */
.engine-card--render{ color:#fff; min-height:340px; display:flex; }
.engine-card--render .engine-inner{ justify-content:flex-end; min-height:340px; }
.engine-card--render::after{
  content:""; position:absolute; inset:0; z-index:1;
  background:linear-gradient(180deg, rgba(0,0,0,.05) 30%, rgba(0,0,0,.66) 100%);
}
.engine-card--render .engine-date,
.engine-card--render .engine-inner{ z-index:2; }
.engine-card--render .engine-title{ color:#fff; }
.engine-card--render .engine-excerpt,
.engine-card--render .engine-meta{ color:rgba(255,255,255,.85); }
.engine-card--render .engine-pill{ border-color:rgba(255,255,255,.8); color:#fff; }

/* ---- featured: subtle accent ring + pin ---- */
.engine-card.is-featured{ box-shadow:0 0 0 2px var(--global-theme-color); }
.engine-card.is-featured .engine-inner::before{
  content:"\f08d"; font-family:"Font Awesome 6 Free"; font-weight:900;
  position:absolute; top:20px; left:22px; font-size:12px; color:var(--global-theme-color);
}

@media (prefers-reduced-motion: reduce){
  .engine-card{ transition:none; }
  .engine-card:hover{ transform:none; }
}
</style>

<div class="post">

  {% comment %} ===== masthead (single, from _config.yml) ===== {% endcomment %}
  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}
  {% if blog_name_size > 0 or blog_description_size > 0 %}
    <div class="header-bar">
      <h1>ENGINE</h1>
      <h2>{{ site.blog_description }}</h2>
    </div>
  {% endif %}

  {% comment %} ===== category filter (moved into body — no fixed bar) ===== {% endcomment %}
  <nav class="engine-filter">
    <a href="{{ '/engine/' | relative_url }}" class="on">All</a>
    {% for category in site.display_categories %}
      <a href="{{ category | slugify | prepend: '/engine/category/' | relative_url }}">{{ category }}</a>
    {% endfor %}
  </nav>

  {% comment %} ===== tag pills (kept from your current page) ===== {% endcomment %}
  {% if site.display_tags and site.display_tags.size > 0 %}
    <div class="tag-category-list">
      <ul class="p-0 m-0">
        {% for tag in site.display_tags %}
          <li>
            <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/engine/tag/' | relative_url }}">{{ tag }}</a>
          </li>
          {% unless forloop.last %}<p>&bull;</p>{% endunless %}
        {% endfor %}
      </ul>
    </div>
  {% endif %}

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

      {% comment %} card type: thumbnail → render, else card_color, else auto-rotate {% endcomment %}
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
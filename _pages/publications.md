---
layout: default
permalink: /story-creating/
title: STORY-CREATING
nav: true
nav_order: 4
---

{% comment %} ===== STORY-CREATING — classified dossier archive (this page only) ===== {% endcomment %}
<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=IBM+Plex+Sans+KR:wght@400;500;700&display=swap');

body{ background: radial-gradient(120% 90% at 50% 0%, #36444f 0%, #1a212b 62%), #141a22 !important; }

.sc-wrap{ position:relative; max-width:1120px; margin:0 auto; padding:24px 0 90px; --ink:#241f18; --ink-dim:#6a5f4d;
  --kraft:#cdb387; --kraft-dk:#b89a68; --paper:#f3ecdb; --paper-2:#efe6d0; --stamp:#b2372a;
  --type:"Special Elite",monospace; --serif:"Fraunces",serif; --kor:"IBM Plex Sans KR",sans-serif; }
.sc-wrap::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; opacity:.5;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E"); }
.sc-wrap > *{ position:relative; z-index:1; }

.sc-masthead{ position:relative; margin-bottom:20px; background:transparent; }
.sc-eyebrow{ font-family:var(--type); font-size:12px; letter-spacing:.34em; color:var(--kraft); text-transform:uppercase; }
.sc-masthead h1{ font-family:var(--serif); font-weight:900; font-size:clamp(44px,8vw,104px); line-height:.9; letter-spacing:-.02em; margin:14px 0 0; color:#f3ecdb; }
.sc-masthead h1 .sc-slash{ color:var(--stamp); }
.sc-masthead .sc-sub{ font-family:var(--type); font-size:13px; letter-spacing:.04em; color:#cbbfa6; margin-top:16px; }

.sc-tabs{ display:flex; flex-wrap:wrap; gap:6px; margin:36px 0 30px; border-bottom:2px solid rgba(205,179,135,.35); }
.sc-tab{ font-family:var(--type); font-size:12px; letter-spacing:.14em; text-transform:uppercase; background:var(--kraft-dk); color:#3a2f1c; border:none; cursor:pointer; padding:10px 20px 12px; border-radius:10px 10px 0 0; transform:translateY(2px); opacity:.72; transition:.16s; }
.sc-tab:hover{ opacity:.9; }
.sc-tab.on{ background:var(--paper); color:var(--ink); opacity:1; transform:translateY(0); }
.sc-tab .kr{ font-family:var(--kor); font-weight:700; margin-right:6px; }

.sc-grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:38px 30px; }
@media(max-width:520px){ .sc-grid{ grid-template-columns:1fr; gap:34px; } }

.sc-item{ position:relative; text-decoration:none; color:var(--ink); display:block; transition:transform .2s ease, filter .2s ease; transform:rotate(var(--rot,0deg)); }
.sc-item:hover{ transform:rotate(0deg) translateY(-5px); filter:drop-shadow(0 16px 22px rgba(0,0,0,.5)); z-index:3; color:var(--ink); }

.sc-paper{ position:relative; padding:22px 20px 20px; border-radius:3px; color:var(--ink); box-shadow:0 8px 20px -8px rgba(0,0,0,.6); }
.sc-genre{ font-family:var(--type); font-size:10px; letter-spacing:.2em; text-transform:uppercase; color:var(--stamp); }
.sc-title{ font-family:var(--kor); font-weight:700; font-size:22px; line-height:1.3; margin:8px 0 0; color:var(--ink); }
.sc-logline{ font-family:var(--kor); font-size:13.5px; line-height:1.7; color:var(--ink-dim); margin:10px 0 0; }
.sc-fileno{ font-family:var(--type); font-size:10px; letter-spacing:.12em; color:var(--ink-dim); margin-top:16px; display:flex; justify-content:space-between; }
.sc-clip{ position:absolute; top:-13px; left:26px; width:26px; height:56px; z-index:4; }

.sc-folder .sc-paper{ background:linear-gradient(160deg,var(--kraft) 0%,var(--kraft-dk) 100%); padding-top:34px; }
.sc-folder .sc-paper::before{ content:""; position:absolute; top:-16px; left:0; width:120px; height:18px; background:var(--kraft); border-radius:8px 8px 0 0; }
.sc-redstrip{ position:absolute; bottom:16px; right:-6px; background:var(--stamp); color:#fff; font-family:var(--type); font-size:10px; letter-spacing:.18em; padding:5px 12px; transform:rotate(-3deg); box-shadow:0 3px 8px rgba(0,0,0,.35); }

.sc-receipt .sc-paper{ background:var(--paper); width:86%; margin:0 auto; padding:24px 22px 10px; font-family:var(--type); }
.sc-receipt .sc-paper::after{ content:""; position:absolute; left:0; right:0; bottom:-8px; height:10px; background:radial-gradient(circle at 6px -2px, transparent 6px, var(--paper) 6px) repeat-x; background-size:14px 12px; }
.sc-receipt .sc-title{ font-family:var(--type); font-weight:400; font-size:17px; letter-spacing:.02em; text-align:center; border-bottom:1px dashed #b9ad91; padding-bottom:12px; }
.sc-rrow{ display:flex; justify-content:space-between; font-size:11px; color:#4a4436; margin-top:8px; letter-spacing:.02em; }
.sc-barcode{ height:34px; margin:14px 0 6px; background:repeating-linear-gradient(90deg,#241f18 0 2px, transparent 2px 4px, #241f18 4px 5px, transparent 5px 9px); }

.sc-polaroid .sc-paper{ background:#fbf9f4; padding:14px 14px 0; }
.sc-photo{ aspect-ratio:1/1; border-radius:1px; }
.sc-cap{ font-family:var(--kor); font-weight:700; font-size:20px; color:#2a241b; text-align:center; padding:12px 4px 16px; line-height:1.2; }
.sc-polaroid .sc-genre{ position:absolute; top:20px; left:20px; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,.5); }
.sc-tape{ position:absolute; top:-10px; left:50%; transform:translateX(-50%) rotate(-2deg); width:90px; height:26px; background:rgba(224,214,170,.55); box-shadow:0 1px 2px rgba(0,0,0,.2); z-index:4; }

.sc-memo .sc-paper{ background:var(--paper-2); padding-bottom:34px; clip-path:polygon(0 0,100% 0,100% 92%,94% 96%,86% 91%,72% 97%,60% 92%,46% 97%,32% 92%,18% 97%,8% 92%,0 96%); }
.sc-memo .sc-title{ font-family:var(--kor); font-weight:700; font-size:22px; line-height:1.3; }
.sc-pin{ position:absolute; top:-8px; left:50%; transform:translateX(-50%); width:18px; height:18px; border-radius:50%; background:radial-gradient(circle at 35% 30%, #ff7d6b, var(--stamp)); box-shadow:0 4px 7px rgba(0,0,0,.45); z-index:4; }
.sc-pin::after{ content:""; position:absolute; top:15px; left:50%; transform:translateX(-50%); width:2px; height:9px; background:#5b1a13; }

.sc-index .sc-paper{ background:linear-gradient(var(--paper) 0 0) padding-box, repeating-linear-gradient(#efe6d0 0 27px, #c9bfa2 27px 28px); border-top:8px solid var(--stamp); padding-top:20px; }
.sc-index .sc-title{ font-family:var(--type); font-weight:400; font-size:18px; }

.sc-g1{ background:linear-gradient(150deg,#3b3a6b,#7f6a9c); }
.sc-g2{ background:linear-gradient(150deg,#7a5c3a,#c9a15e); }
.sc-g3{ background:linear-gradient(150deg,#25424a,#5aa0a0); }
.sc-g4{ background:linear-gradient(150deg,#5a2530,#b06a72); }

/* force readable dark text on every paper, then re-apply accents */
.sc-wrap .sc-paper, .sc-wrap .sc-paper *{ color:#241f18 !important; }
.sc-wrap .sc-genre{ color:#b2372a !important; }
.sc-wrap .sc-logline, .sc-wrap .sc-fileno{ color:#6a5f4d !important; }
.sc-wrap .sc-rrow{ color:#4a4436 !important; }
.sc-wrap .sc-redstrip{ color:#fff !important; }
.sc-wrap .sc-polaroid .sc-genre{ color:#fff !important; }

.sc-empty{ font-family:var(--type); color:#8d8168; letter-spacing:.06em; padding:30px 0; }
.sc-foot{ margin-top:70px; font-family:var(--type); font-size:11px; letter-spacing:.14em; color:#8d8168; text-align:center; }
@media(prefers-reduced-motion:reduce){ .sc-item{ transition:none; } .sc-item:hover{ transform:rotate(0); } }
</style>

<div class="sc-wrap">

  <div class="sc-masthead">
    <div class="sc-eyebrow">Creative Archive</div>
    <h1>STORY</h1>
    <div class="sc-sub">Here is a collection of my creative writing.</div>
  </div>

  <div class="sc-tabs" id="sc-tabs">
    <button class="sc-tab on" data-f="all">All</button>
    <button class="sc-tab" data-f="poetry">시</button>
    <button class="sc-tab" data-f="fiction">소설</button>
    <button class="sc-tab" data-f="drama">드라마</button>
    <button class="sc-tab" data-f="essay">에세이</button>
  </div>

  {% assign stories = site.stories | where_exp: "s", "s.hidden != true" | sort: "order" %}

  <div class="sc-grid" id="sc-grid">
    {% for s in stories %}
      {% assign card = s.card | default: "folder" %}
      <a class="sc-item sc-{{ card }}" style="--rot:{{ s.rot | default: 0 }}deg" data-genre="{{ s.genre_key }}" href="{{ s.url | relative_url }}">
        {% case card %}
        {% when "polaroid" %}
          <span class="sc-tape"></span>
          <div class="sc-paper">
            <div class="sc-genre">{{ s.genre }}</div>
            <div class="sc-photo sc-{{ s.cover | default: 'g1' }}"></div>
            <div class="sc-cap">{{ s.title }}</div>
          </div>
        {% when "receipt" %}
          <div class="sc-paper">
            <div class="sc-title">{{ s.title }}</div>
            <div class="sc-rrow"><span>GENRE</span><span>{{ s.genre }}</span></div>
            <div class="sc-rrow"><span>YEAR</span><span>{{ s.year }}</span></div>
            <div class="sc-rrow"><span>{{ s.logline }}</span></div>
            <div class="sc-barcode"></div>
            <div class="sc-rrow" style="justify-content:center">— READ FULL —</div>
          </div>
        {% when "memo" %}
          <span class="sc-pin"></span>
          <div class="sc-paper">
            <div class="sc-genre">{{ s.genre }}</div>
            <div class="sc-title">{{ s.title }}</div>
            <div class="sc-logline">{{ s.logline }}</div>
            <div class="sc-fileno"><span>{{ s.file }}</span><span>{{ s.year }}</span></div>
          </div>
        {% when "index" %}
          <svg class="sc-clip" viewBox="0 0 26 56"><path d="M13 4c-5 0-8 3-8 8v30c0 6 4 10 10 10s10-4 10-10V14" fill="none" stroke="#d8d8d8" stroke-width="3"/></svg>
          <div class="sc-paper">
            <div class="sc-genre">{{ s.genre }}</div>
            <div class="sc-title">{{ s.title }}</div>
            <div class="sc-logline">{{ s.logline }}</div>
            <div class="sc-fileno"><span>{{ s.file }}</span><span>{{ s.year }}</span></div>
          </div>
        {% else %}
          <svg class="sc-clip" viewBox="0 0 26 56"><path d="M13 4c-5 0-8 3-8 8v30c0 6 4 10 10 10s10-4 10-10V14" fill="none" stroke="#d8d8d8" stroke-width="3"/></svg>
          <div class="sc-paper">
            <div class="sc-genre">{{ s.genre }}</div>
            <div class="sc-title">{{ s.title }}</div>
            <div class="sc-logline">{{ s.logline }}</div>
            <div class="sc-fileno"><span>{{ s.file }}</span><span>{{ s.year }}</span></div>
            {% if s.stamp %}<div class="sc-redstrip">{{ s.stamp }}</div>{% endif %}
          </div>
        {% endcase %}
      </a>
    {% else %}
      <p class="sc-empty">아직 등록된 글이 없습니다. _stories 폴더에 파일을 추가하세요.</p>
    {% endfor %}
  </div>

  <div class="sc-foot">— END OF FILE · {{ stories | size }} DOCUMENTS ARCHIVED —</div>
</div>

<script>
  (function(){
    var tabs=document.getElementById('sc-tabs');
    if(!tabs) return;
    var items=[].slice.call(document.querySelectorAll('.sc-item'));
    tabs.addEventListener('click',function(e){
      var b=e.target.closest('.sc-tab'); if(!b)return;
      tabs.querySelectorAll('.sc-tab').forEach(function(t){t.classList.remove('on');});
      b.classList.add('on');
      var f=b.dataset.f;
      items.forEach(function(it){
        it.style.display = (f==='all'||it.dataset.genre===f) ? 'block':'none';
      });
    });
  })();
</script>
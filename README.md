
# 0zzySeer.github.io
Site de casamento — Osiel &amp; Danielle
/**
 * OSIEL & DANIELLE — RSVP
 *
 * 1. Crie/abra a planilha onde deseja receber as confirmações.
 * 2. Extensões > Apps Script.
 * 3. Cole este arquivo no editor.
 * 4. Ajuste SPREADSHEET_ID e SHEET_NAME.
 * 5. Implante como aplicativo da Web:
 *    - Executar como: você
 *    - Quem tem acesso: qualquer pessoa
 * 6. Copie a URL /exec para RSVP_ENDPOINT no index-rsvp-custom.html.
 */

const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
const SHEET_NAME = "RSVP";

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/hora", "Nome", "Presença", "Mensagem", "Origem", "Data do evento"]);
    }

    sheet.appendRow([
      new Date(),
      p.nome || "",
      p.presenca || "",
      p.mensagem || "",
      p.origem || "site",
      p.data_evento || "14 de novembro de 2026"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Osiel & Danielle — 14.11.2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&family=Parisienne&display=swap" rel="stylesheet">
<style>
:root{--espresso:#1d120c;--coffee:#2b1b12;--cream:#f5eee2;--ivory:#fcf8f0;--gold:#b99867;--gold2:#d7bf94;--ink:#34251b;--muted:#756758}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--ivory);color:var(--ink);font-family:Montserrat,sans-serif}a{text-decoration:none;color:inherit}
.hero{height:100vh;min-height:720px;position:relative;display:flex;align-items:center;overflow:hidden;color:#fff;background:#170e09}
.hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(13,7,4,.93) 0%,rgba(13,7,4,.78) 28%,rgba(13,7,4,.28) 58%,rgba(13,7,4,.08) 100%),url("assets/foto-casamento.png");background-position:center right;background-size:cover;background-repeat:no-repeat}
.hero:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(13,7,4,.08),transparent 65%)}
.nav{position:absolute;z-index:10;top:0;left:0;right:0;height:82px;display:flex;align-items:center;justify-content:center;gap:45px;border-bottom:1px solid rgba(231,207,166,.18)}
.nav a{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#f5ead9}.logo{position:absolute;left:55px;font-size:27px;color:var(--gold2)}.nav-heart{position:absolute;right:55px;font-size:25px;color:var(--gold2)}
.hero-content{position:relative;z-index:8;max-width:650px;margin-left:8%;padding-top:65px}.eyebrow{font-size:11px;letter-spacing:6px;text-transform:uppercase;color:var(--gold2)}.names{font-family:Parisienne,cursive;font-size:clamp(70px,9vw,125px);font-weight:400;line-height:.95;margin:25px 0 18px}.hero-date{font-family:"Cormorant Garamond",serif;font-size:22px;letter-spacing:7px}.rule{display:flex;align-items:center;gap:15px;margin:25px 0;color:var(--gold2)}.rule:before,.rule:after{content:"";height:1px;width:72px;background:currentColor}.hero-text{font:italic 18px/1.65 "Cormorant Garamond",serif;max-width:390px;color:#eee1cf}.outline-btn{display:inline-flex;align-items:center;gap:13px;margin-top:15px;padding:15px 25px;border:1px solid var(--gold2);border-radius:40px;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#fff;transition:.25s}.outline-btn:hover{background:#fff;color:var(--espresso)}
section{position:relative;overflow:hidden}.paper{background:var(--cream);padding:105px 25px}.dark{background:var(--espresso);color:#f8eee0;padding:105px 25px}.container{max-width:1080px;margin:auto}.center{text-align:center}.section-title{font:500 clamp(45px,6vw,72px) "Cormorant Garamond",serif;margin:8px 0 12px}.script{font-family:Parisienne,cursive;font-weight:400}.sub{max-width:650px;margin:0 auto;font:italic 19px/1.65 "Cormorant Garamond",serif;color:var(--muted)}
.floral{position:absolute;width:250px;height:340px;opacity:.42;pointer-events:none}.floral.left{left:-35px;top:15px}.floral.right{right:-35px;bottom:-35px;transform:scaleX(-1)}.leaf{fill:none;stroke:#b49b76;stroke-width:1.5}.leaffill{fill:#d9cbb4;opacity:.55}.stem{fill:none;stroke:#b49b76;stroke-width:1.3}
.date-row{display:flex;justify-content:center;align-items:center;margin:48px auto 0;max-width:530px}.date-item{padding:0 42px}.date-item+.date-item{border-left:1px solid #cdbb9a}.number{font:500 55px "Cormorant Garamond",serif}.label{font-size:10px;letter-spacing:4px;text-transform:uppercase}
.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-top:55px}.story-image{min-height:470px;background:linear-gradient(135deg,rgba(29,18,12,.08),rgba(29,18,12,.45)),url("assets/foto-casamento.png") center/cover;filter:saturate(.72)}.story-copy{padding:20px}.story-copy h3{font:500 42px "Cormorant Garamond",serif;margin:8px 0 15px}.story-copy p{line-height:1.9;color:var(--muted)}
.story-with-photo{align-items:center}.story-photo-wrap{padding:8px}.story-photo-frame{position:relative;padding:10px;background:#f7f0e3;border:1px solid rgba(168,139,94,.45);box-shadow:0 18px 45px rgba(38,24,15,.14);transform:rotate(-1.2deg)}.story-photo-frame:before{content:"";position:absolute;inset:5px;border:1px solid rgba(168,139,94,.22);pointer-events:none}.story-photo{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;object-position:center center}.story-with-photo .story-copy{padding:20px 10px 20px 35px}.story-with-photo .story-copy p{max-width:540px}

.details{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:55px;border-top:1px solid rgba(215,191,148,.35);border-bottom:1px solid rgba(215,191,148,.35)}.detail{padding:40px;text-align:center}.detail+.detail{border-left:1px solid rgba(215,191,148,.35)}.detail-icon{font-size:32px;color:var(--gold2)}.detail h3{font:500 34px "Cormorant Garamond",serif;margin:12px 0}.detail p{font-size:13px;line-height:1.8;color:#d7cabb}.map-btn{display:inline-block;margin-top:10px;padding:12px 20px;border:1px solid var(--gold2);border-radius:30px;font-size:9px;letter-spacing:2px;text-transform:uppercase}

.gift-intro{margin-bottom:45px}.gift-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.gift{position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(215,191,148,.3);padding:30px 24px;text-align:center;transition:.25s}.gift:hover{transform:translateY(-5px);border-color:var(--gold2)}.gift-icon{font-size:32px;color:var(--gold2);height:42px;display:flex;align-items:center;justify-content:center}.gift-svg{width:38px;height:38px;display:block}.gift h3{font:500 28px "Cormorant Garamond",serif;margin:12px 0 5px}.gift p{font-size:12px;line-height:1.7;color:#cfc1b1;min-height:42px}.gift-price{font:500 23px "Cormorant Garamond",serif;color:var(--gold2);margin:13px}.gift button{border:1px solid var(--gold2);background:transparent;color:#fff;border-radius:30px;padding:12px 20px;font-size:9px;letter-spacing:2px;text-transform:uppercase;cursor:pointer}

.timeline{padding:100px 25px;background:var(--ivory)}.timeline-line{max-width:820px;margin:50px auto 0;display:grid;grid-template-columns:1fr 1px 1fr}.timeline-center{background:#cbb997}.timeline-card{padding:0 42px 55px}.timeline-card:nth-child(2n+1){text-align:right}.timeline-card h3{font:500 30px "Cormorant Garamond",serif;margin:0}.timeline-card p{font-size:12px;line-height:1.8;color:var(--muted)}.dot{width:12px;height:12px;border:1px solid #a8895b;background:var(--ivory);border-radius:50%;margin:-5px 0 0 -6px;position:absolute}

.rsvp{background:linear-gradient(rgba(245,238,226,.94),rgba(245,238,226,.94)),url("assets/foto-casamento.png") center/cover;padding:105px 25px}.form{max-width:620px;margin:40px auto;display:grid;gap:14px}.form input,.form select,.form textarea{font:inherit;padding:15px 17px;border:1px solid #d4c5ae;background:rgba(255,255,255,.7);outline:none}.form textarea{min-height:120px;resize:vertical}.form button{border:0;background:var(--espresso);color:#fff;padding:16px;letter-spacing:2px;text-transform:uppercase;font-size:10px;cursor:pointer}

footer{padding:70px 25px;text-align:center;background:#140c08;color:#d9cbb8}.footer-name{font:55px Parisienne,cursive;color:#e0c79b}.footer-date{letter-spacing:4px;font-size:10px;margin-top:10px}

.modal{display:none;position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.78);place-items:center;padding:20px}.modal.open{display:grid}.modal-box{position:relative;width:min(450px,100%);background:var(--ivory);color:var(--ink);padding:35px;text-align:center}.close{position:absolute;right:14px;top:10px;border:0;background:none;font-size:27px;cursor:pointer}.modal-title{font:500 39px "Cormorant Garamond",serif}.qr{width:220px;height:220px;object-fit:contain;background:#fff;padding:7px;border:1px solid #d8cbb8;margin:15px auto}.pixkey{background:#fff;border:1px solid #ded2c1;padding:15px;font-size:12px;word-break:break-all}.copy{border:0;background:var(--espresso);color:#fff;padding:13px 22px;border-radius:30px;margin-top:13px;cursor:pointer}

@media(max-width:800px){.hero-bg{background-position:62% center;background-size:cover}.hero-content{background:linear-gradient(90deg,rgba(13,7,4,.2),transparent);padding-right:8px}.nav{gap:12px;height:70px}.nav a{font-size:8px;letter-spacing:1.2px}.logo,.nav-heart{display:none}.hero{min-height:690px}.hero-content{margin-left:7%;margin-right:6%;padding-top:55px}.hero-date{font-size:16px;letter-spacing:4px}.hero-text{font-size:16px}.story-grid,.details{grid-template-columns:1fr}.story-with-photo .story-copy{padding:35px 10px 10px}.detail+.detail{border-left:0;border-top:1px solid rgba(215,191,148,.35)}.gift-grid{grid-template-columns:1fr}.timeline-line{grid-template-columns:1fr}.timeline-center{display:none}.timeline-card,.timeline-card:nth-child(2n+1){text-align:center;padding:20px 10px}.date-item{padding:0 20px}.number{font-size:45px}.floral{width:180px;height:250px}}

.church-svg{width:42px;height:42px;display:inline-block}
.pix-intro{font-family:"Cormorant Garamond",serif;font-size:19px;line-height:1.5}
.qr{display:block;width:240px;height:240px;object-fit:contain;background:#fff;padding:10px;border:1px solid #cdbb9a;margin:18px auto;image-rendering:auto}

.story-decorative{grid-template-columns:1fr 1fr}
.story-decoration{
  min-height:470px;position:relative;display:flex;align-items:center;justify-content:center;
  border:1px solid rgba(184,155,113,.35);
  background:radial-gradient(circle at center,rgba(255,255,255,.48),rgba(232,219,199,.22) 55%,transparent 56%);
}
.story-decoration:before,.story-decoration:after{
  content:"";position:absolute;left:12%;right:12%;height:1px;background:#cdbb9a;opacity:.65;
}
.story-decoration:before{top:18%}.story-decoration:after{bottom:18%}
.ornament-circle{width:190px;height:190px;border:1px solid #b99b6e;border-radius:50%;position:relative}
.ornament-circle:before,.ornament-circle:after{content:"";position:absolute;inset:13px;border:1px solid rgba(185,155,110,.45);border-radius:50%}
.ornament-heart{position:absolute;font-size:62px;color:#9f8055;background:var(--cream);padding:0 15px;line-height:1}
.ornament-flower,.ornament-leaf{position:absolute;color:#b49a75;z-index:2}
.ornament-flower{font-size:45px}.ornament-leaf{font-size:55px}
.flower-1{left:16%;top:24%}.flower-2{right:15%;bottom:22%}
.leaf-1{left:24%;bottom:18%;transform:rotate(-25deg)}.leaf-2{right:22%;top:18%;transform:scaleX(-1) rotate(-25deg)}
@media(max-width:800px){.story-decorative{grid-template-columns:1fr}.story-decoration{min-height:320px}.story-copy{padding-top:35px}}
.google-form-wrap{max-width:760px;margin:38px auto 0;background:rgba(255,255,255,.82);border:1px solid #d4c5ae;padding:10px;box-shadow:0 15px 40px rgba(38,24,15,.08)}.google-form-wrap iframe{border-radius:2px}.rsvp-note{margin:18px auto 0;max-width:650px;font-size:11px;line-height:1.7;color:#756758}@media(max-width:800px){.google-form-wrap{margin-top:28px;padding:5px}.google-form-wrap iframe{height:820px}}
.rsvp .form{max-width:620px;margin:40px auto 0}
.rsvp .form input,.rsvp .form select,.rsvp .form textarea{
  font:inherit;padding:16px 17px;border:1px solid #d4c5ae;background:rgba(255,255,255,.82);
  outline:none;color:var(--ink);border-radius:2px
}
.rsvp .form input:focus,.rsvp .form select:focus,.rsvp .form textarea:focus{
  border-color:#a8895b;box-shadow:0 0 0 3px rgba(168,137,91,.10)
}
.rsvp .form textarea{min-height:120px;resize:vertical}
.rsvp .form button{border:0;background:var(--espresso);color:#fff;padding:16px;letter-spacing:2px;text-transform:uppercase;font-size:10px;cursor:pointer;transition:.2s}
.rsvp .form button:hover{transform:translateY(-1px);background:#2b1b12}
.rsvp .form button:disabled{opacity:.6;cursor:wait;transform:none}
#rsvpStatus{min-height:22px;font-size:12px;line-height:1.5;margin-top:2px}
#rsvpStatus.ok{color:#496044}
#rsvpStatus.error{color:#8a3f32}

.verse-section{
  position:relative;
  overflow:hidden;
  padding:105px 25px;
  text-align:center;
  background:linear-gradient(135deg,#f8f1e5,#eee2cf);
  color:var(--ink);
  border-top:1px solid rgba(184,155,113,.25);
  border-bottom:1px solid rgba(184,155,113,.25)
}
.verse-section:before,.verse-section:after{
  content:"";
  position:absolute;
  width:220px;
  height:220px;
  border:1px solid rgba(185,155,110,.18);
  border-radius:50%;
}
.verse-section:before{left:-110px;top:-110px}
.verse-section:after{right:-110px;bottom:-110px}
.verse-section blockquote{
  position:relative;
  max-width:800px;
  margin:0 auto 25px;
  font:italic 30px/1.6 "Cormorant Garamond",serif;
  color:#49372a
}
.verse-mark{
  font:72px/1 "Cormorant Garamond",serif;
  color:#b99867;
  height:58px;
  margin:8px 0 2px
}
.verse-reference{
  font:500 16px "Cormorant Garamond",serif;
  letter-spacing:4px;
  text-transform:uppercase;
  color:#8e7149
}
.verse-ornament{
  color:#b99867;
  font-size:20px;
  letter-spacing:8px;
  margin:14px 0
}
@media(max-width:800px){
  .verse-section{padding:80px 22px}
  .verse-section blockquote{font-size:24px;line-height:1.55}
  .verse-reference{font-size:13px;letter-spacing:3px}
}
</style>
</head>
<body>

<header class="hero" id="inicio">
<div class="hero-bg"></div>
<nav class="nav">
<div class="logo">♡</div>
<a href="#inicio">Início</a><a href="#historia">Nossa história</a><a href="#detalhes">Detalhes</a><a href="#presentes">Presentes</a><a href="#rsvp">Confirme sua presença</a>
<div class="nav-heart">♡</div>
</nav>
<div class="hero-content">
<div class="eyebrow">Nosso grande dia</div>
<h1 class="names">Osiel & Danielle</h1>
<div class="hero-date">14 DE NOVEMBRO DE 2026</div>
<div class="rule">♡</div>
<p class="hero-text">Vamos celebrar o amor que nos trouxe até aqui e que nos leva a um futuro juntos.</p>
<a class="outline-btn" href="#rsvp">Confirmar presença <span>→</span></a>
</div>
</header>

<section class="paper" id="historia">
<svg class="floral left" viewBox="0 0 250 340"><path class="stem" d="M20 330 C55 260 105 190 205 30"/><ellipse class="leaffill" cx="60" cy="250" rx="34" ry="12" transform="rotate(-48 60 250)"/><ellipse class="leaffill" cx="86" cy="207" rx="33" ry="12" transform="rotate(-38 86 207)"/><ellipse class="leaffill" cx="119" cy="158" rx="34" ry="12" transform="rotate(-37 119 158)"/><ellipse class="leaffill" cx="151" cy="108" rx="30" ry="11" transform="rotate(-36 151 108)"/><ellipse class="leaffill" cx="77" cy="274" rx="32" ry="12" transform="rotate(24 77 274)"/><ellipse class="leaffill" cx="108" cy="220" rx="31" ry="11" transform="rotate(22 108 220)"/><ellipse class="leaffill" cx="145" cy="167" rx="31" ry="11" transform="rotate(21 145 167)"/></svg>
<svg class="floral right" viewBox="0 0 250 340"><path class="stem" d="M20 330 C55 260 105 190 205 30"/><ellipse class="leaffill" cx="60" cy="250" rx="34" ry="12" transform="rotate(-48 60 250)"/><ellipse class="leaffill" cx="86" cy="207" rx="33" ry="12" transform="rotate(-38 86 207)"/><ellipse class="leaffill" cx="119" cy="158" rx="34" ry="12" transform="rotate(-37 119 158)"/><ellipse class="leaffill" cx="151" cy="108" rx="30" ry="11" transform="rotate(-36 151 108)"/></svg>
<div class="container center">
<div class="eyebrow">Sobre nós</div><h2 class="section-title script">Osiel & Danielle</h2>
<div class="rule" style="justify-content:center;color:#a88b5e">♡</div>
<p class="sub">Duas histórias, um só propósito: construir uma vida juntos, com amor, respeito e muitos sonhos para viver.</p>
<div class="date-row"><div class="date-item"><div class="number">14</div><div class="label">Novembro</div></div><div class="date-item"><div class="number">2026</div><div class="label">Nosso grande dia</div></div></div>
</div>
</section>

<section class="paper" style="padding-top:20px;padding-bottom:100px">
<div class="container story-grid story-with-photo">
<div class="story-photo-wrap">
  <div class="story-photo-frame">
    <img class="story-photo" src="assets/foto-nossa-historia.jpeg" alt="Osiel e Danielle juntos" loading="lazy">
  </div>
</div>
<div class="story-copy"><div class="eyebrow">Nossa história</div><h3>O começo de uma nova fase</h3><p>Um amor construído com carinho, companheirismo e muitos sonhos. Agora, Osiel & Danielle se preparam para celebrar esse novo capítulo ao lado das pessoas que fazem parte da nossa história.</p><p>Queremos guardar este dia para sempre e compartilhar cada momento com quem amamos.</p><div class="rule" style="color:#a88b5e">♡</div></div>
</div>
</section>


<section class="verse-section">
  <div class="verse-ornament">✦</div>
  <div class="eyebrow">Uma palavra para o nosso dia</div>
  <div class="verse-mark">“</div>
  <blockquote>
    Para que todos vejam, e saibam, e considerem, e juntamente entendam
    que a mão do Senhor fez isto, e o Santo de Israel o criou.
  </blockquote>
  <div class="verse-reference">Isaías 41:20</div>
  <div class="verse-ornament">♡</div>
</section>

<section class="dark" id="detalhes">
<div class="container center"><div class="eyebrow">Reserve a data</div><h2 class="section-title">Cerimônia & celebração</h2><p class="sub" style="color:#d2c3b1">Tudo preparado com carinho para receber vocês no nosso grande dia.</p>
<div class="details">
<div class="detail"><div class="detail-icon"><svg class="church-svg" viewBox="0 0 64 64" aria-hidden="true">
<path d="M30 7h4v9h9v4h-9v10h15v25H15V30h15V20h-9v-4h9V7Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M10 55h44M22 55V39h8v16m12 0V39h-8v16M8 30l24-15 24 15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
</svg></div><h3>Cerimônia</h3><p><strong>AD Belém - Conjunto Mauro Marcondes (Setor 14)</strong><br>R. Hilário Baldo, 214-342<br>Conj. Mauro Marcondes, Campinas - SP<br>CEP 13057-421</p><a class="map-btn" target="_blank" href="https://www.google.com/maps/search/?api=1&query=R.%20Hil%C3%A1rio%20Baldo%2C%20214-342%2C%20Campinas%20-%20SP%2C%2013057-421">Abrir no mapa</a></div>
<div class="detail"><div class="detail-icon">♡</div><h3>Nosso casamento</h3><p>14 de novembro de 2026<br><br><strong>19h</strong><br>Estamos preparando tudo para que seja um dia inesquecível.</p></div>
</div></div>
</section>

<section class="dark" id="presentes" style="padding-top:25px">
<div class="container center">
<div class="gift-intro"><div class="eyebrow">Com carinho</div><h2 class="section-title">Nossos presentes</h2><div class="rule" style="justify-content:center">♡</div><p class="sub" style="color:#d2c3b1">Se você deseja nos presentear, fique à vontade para escolher um item da nossa lista. Sua presença já é o maior presente!</p></div>
<div class="gift-grid">
<div class="gift"><div class="gift-icon">✈</div><h3>Lua de mel</h3><p>Uma contribuição para vivermos momentos inesquecíveis.</p><div class="gift-price">R$ 150</div><button onclick="openPix('Lua de mel','R$ 150')">Presentear</button></div>
<div class="gift"><div class="gift-icon">⌂</div><h3>Nosso novo lar</h3><p>Ajude a construir o nosso cantinho.</p><div class="gift-price">R$ 250</div><button onclick="openPix('Nosso novo lar','R$ 250')">Presentear</button></div>
<div class="gift"><div class="gift-icon">♡</div><h3>Jantar romântico</h3><p>Uma noite especial para celebrar o nosso amor.</p><div class="gift-price">R$ 100</div><button onclick="openPix('Jantar romântico','R$ 100')">Presentear</button></div>
<div class="gift"><div class="gift-icon">
<svg class="gift-svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M15 29h34v3H15z" fill="none" stroke="currentColor" stroke-width="2.3"/>
  <path d="M19 32h26v15H19z" fill="none" stroke="currentColor" stroke-width="2.3"/>
  <path d="M14 29c0-4 4-6 9-6 4 0 7 2 9 4 2-2 5-4 9-4 5 0 9 2 9 6" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
  <path d="M32 23v24" fill="none" stroke="currentColor" stroke-width="2.3"/>
  <path d="M32 23c-1-5-5-8-9-7 0 5 3 8 9 7ZM32 23c1-5 5-8 9-7 0 5-3 8-9 7Z" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/>
</svg>
</div><h3>Café da manhã</h3><p>Um pequeno mimo para a nossa nova rotina.</p><div class="gift-price">R$ 70</div><button onclick="openPix('Café da manhã','R$ 70')">Presentear</button></div>
<div class="gift"><div class="gift-icon">◇</div><h3>Presente especial</h3><p>Uma lembrança escolhida com muito carinho.</p><div class="gift-price">R$ 200</div><button onclick="openPix('Presente especial','R$ 200')">Presentear</button></div>
<div class="gift"><div class="gift-icon">♡</div><h3>Do seu jeito</h3><p>Escolha o valor que deseja oferecer.</p><div class="gift-price">Valor livre</div><button onclick="openPix('Presente do seu jeito','Valor livre')">Presentear</button></div>
</div>
</div>
</section>

<section class="timeline">
<div class="container center"><div class="eyebrow">Nosso momento</div><h2 class="section-title">Um dia especial</h2>
<div class="timeline-line">
<div class="timeline-card"><h3>14 de novembro</h3><p>O dia em que vamos celebrar o nosso amor junto das pessoas que fazem parte da nossa história.</p></div><div class="timeline-center"></div><div class="timeline-card"><h3>Depois da cerimônia</h3><p>Seguiremos juntos para celebrar, abraçar, sorrir e guardar novas memórias.</p></div>
</div></div>
</section>

<section class="rsvp" id="rsvp">
<div class="container center">
<div class="eyebrow">Esperamos você</div><h2 class="section-title script">Confirme sua presença</h2>
<div class="rule" style="justify-content:center;color:#a88b5e">♡</div>
<p class="sub">Será uma alegria imensa ter você conosco nesse momento tão especial.</p>
<form class="form" id="rsvpForm">
  <input type="text" name="nome" placeholder="Seu nome" autocomplete="name" required>
  <select name="presenca" required>
    <option value="" disabled selected>Você estará conosco?</option>
    <option value="Sim, estarei presente">Sim, estarei presente</option>
    <option value="Não poderei comparecer">Não poderei comparecer</option>
  </select>
  <textarea name="mensagem" placeholder="Deixe uma mensagem para os noivos (opcional)"></textarea>
  <button type="submit" id="rsvpSubmit">Confirmar presença</button>
  <div id="rsvpStatus" role="status" aria-live="polite"></div>
</form>
<p class="rsvp-note">Sua confirmação será enviada diretamente para a planilha configurada pelos noivos, sem exibir o Google Forms.</p>
</div>
</section>

<footer><div class="footer-name">Osiel & Danielle</div><div class="footer-date">14 DE NOVEMBRO DE 2026 · COM AMOR ♡</div></footer>

<div class="modal" id="pixModal"><div class="modal-box"><button class="close" onclick="closePix()">×</button><div class="eyebrow">Seu presente</div><h2 class="modal-title" id="giftName"></h2><p id="giftValue"></p><p class="pix-intro">Escaneie o QR Code PIX com o aplicativo do seu banco:</p><img class="qr" src="assets/qrcode-pix.png" alt="QR Code PIX" onerror="this.style.display='none';document.getElementById('qrError').style.display='block'"><p id="qrError" style="display:none;font-size:12px">O QR Code não foi encontrado. Mantenha a pasta <strong>assets</strong> junto do index.html.</p><div class="pixkey" id="pixKey">f92c1323-8af9-4a82-81ca-bfe412d67e8d</div><button class="copy" onclick="copyPix()">Copiar chave PIX</button></div></div>

<script>
const PIX_KEY="f92c1323-8af9-4a82-81ca-bfe412d67e8d";

/*
 * RSVP:
 * Cole aqui a URL pública do Google Apps Script Web App que grava as respostas
 * na sua planilha. O código do Apps Script está no arquivo google-apps-script.gs.
 */
const RSVP_ENDPOINT="COLE_AQUI_A_URL_DO_GOOGLE_APPS_SCRIPT";

function openPix(n,v){giftName.textContent=n;giftValue.textContent="Valor: "+v;pixModal.classList.add("open")}
function closePix(){pixModal.classList.remove("open")}
async function copyPix(){try{await navigator.clipboard.writeText(PIX_KEY);alert("Chave PIX copiada!")}catch(e){alert("Copie a chave PIX manualmente.")}}
window.addEventListener("click",e=>{if(e.target===pixModal)closePix()})

const rsvpForm=document.getElementById("rsvpForm");
const rsvpSubmit=document.getElementById("rsvpSubmit");
const rsvpStatus=document.getElementById("rsvpStatus");

rsvpForm.addEventListener("submit", async (event)=>{
  event.preventDefault();
  rsvpStatus.className="";
  rsvpStatus.textContent="";

  if(!RSVP_ENDPOINT || RSVP_ENDPOINT.includes("COLE_AQUI")){
    rsvpStatus.className="error";
    rsvpStatus.textContent="A confirmação ainda precisa ser conectada à planilha dos noivos.";
    return;
  }

  rsvpSubmit.disabled=true;
  rsvpSubmit.textContent="Enviando…";

  const data=new FormData(rsvpForm);
  data.append("origem","site de casamento");
  data.append("data_evento","14 de novembro de 2026");

  try{
    await fetch(RSVP_ENDPOINT,{
      method:"POST",
      mode:"no-cors",
      body:data
    });
    rsvpForm.reset();
    rsvpStatus.className="ok";
    rsvpStatus.textContent="Presença enviada com sucesso. Muito obrigado! ♡";
  }catch(error){
    rsvpStatus.className="error";
    rsvpStatus.textContent="Não foi possível enviar agora. Tente novamente em instantes.";
  }finally{
    rsvpSubmit.disabled=false;
    rsvpSubmit.textContent="Confirmar presença";
  }
});
</script>
</body>
</html>
plugins = []
headers = []
redirects = []

[functions]

  [functions."*"]

[build]
publish = "/opt/build/repo"
publishOrigin = "default"

  [build.environment]

  [build.processing]

    [build.processing.css]

    [build.processing.html]

    [build.processing.images]

    [build.processing.js]

  [build.services]
SITE DE CASAMENTO — OSIEL & DANIELLE

Visual inspirado diretamente no modelo enviado: hero cinematográfico, paleta marrom/creme/dourado, tipografia de casamento, flores laterais, divisores, seções editoriais e cartões de presentes.

Dados:
Data: 14 de novembro de 2026
Local: AD Belém - Conjunto Mauro Marcondes (Setor 14)
Endereço: R. Hilário Baldo, 214-342 - Conj. Mauro Marcondes, Campinas - SP, 13057-421
PIX: f92c1323-8af9-4a82-81ca-bfe412d67e8d

Atenção: o formulário de RSVP é visual/demonstrativo. O site precisa de uma integração para armazenar respostas.


HERO: imagem cinematográfica com calendário, alianças e flores adicionada como fundo principal da abertura.


CORREÇÃO DO HERO: removida a imagem gerada que continha textos embutidos. O hero agora usa a foto original limpa como fundo, com os textos do site em uma única camada.


QR CODE: arquivo qrcode-pix.png incluído na pasta assets.
ÍCONE: ícone de igreja adicionado à seção da cerimônia.
